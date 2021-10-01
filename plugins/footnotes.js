const yaml = require('js-yaml');
const visit = require('unist-util-visit');
// fs = require('fs');

const footnotes = [];

// convert "in-string" to "inString"
const strToCamel = (str) => {
  return str.replace(/-(.)/g, (match, chr) => chr.toUpperCase());
};

// convert "{'in-key': val}" to "{'inKey': val}"
const keysToCamel = (obj) => {
  if (obj) {
    const newObj = {};
    Object.keys(obj).forEach((k) => {
      newObj[strToCamel(k)] = obj[k];
    });
    return newObj;
  }
  return obj;
};

// in: ":group:text text"
// out: {group: 'group', text: 'text text'}
const getTextAndGroup = (str) => {
  var matches = str.match(/^:([^:]+):(.*)/);
  if (matches) {
    return {
      group: matches[1],
      text: matches[2],
    };
  }
  return {
    group: 'default',
    text: str,
  };
};

// render the html-tag in the footnote
const renderRef = ({ index, group, label, prefs }) => {
  let ref;
  if (group !== 'default') {
    ref = `${group}-${index}`;
  } else {
    ref = `${index}`;
  }
  return `<span class="footnote-ref" id="ref-${ref}">${
    prefs.referenceTextPrefix ? prefs.referenceTextPrefix : ''
  }<a id="use-ref-${ref}" href="#f-ref-${ref}" class="footnote-ref-link">${
    prefs.referenceLinkPrefix ? prefs.referenceLinkPrefix : ''
  }${label}${
    prefs.referenceLinkSuffix ? prefs.referenceLinkSuffix : ''
  }</a>${
    prefs.referenceTextSuffix ? prefs.referenceTextSuffix : ''
  }</span>`;
};

// transform each reference code block
const transformerRef = ({ markdownAST, index, prefs }) => {
  // holds the definitios (content) of the rerference
  const footnoteDefinitions = [];

  visit(markdownAST, `footnoteDefinition`, (footnoteDefinition) => {
    footnoteDefinitions.push(footnoteDefinition);
  });

  // create a list node `<ol>` that will output our reference list
  let list = {
    type: 'list',
    spread: true, // add p tag around content
    children: [],
  };

  // register the inline footnotes
  visit(markdownAST, `footnote`, (node) => {
    let { group, text } = getTextAndGroup(node.children[0].value);
    if (prefs.groupInclude === group) {
      footnotes.push({
        type: 'footnote',
        children: node.children,
        // identifier set like a group so it can never clash
        identifier: `:foootnote:--${node.position.start.offset}`,
        offset: node.position.start.offset,
      });
    }
  });

  // register the footnote references
  // this is where your footnote text lives
  visit(markdownAST, `footnoteReference`, (node) => {
    let { group, text } = getTextAndGroup(node.identifier);
    if (prefs.groupInclude === group) {
      footnotes.push({
        type: 'footnoteReference',
        identifier: node.identifier,
        offset: node.position.start.offset,
      });
    }
  });

  // sort footnotes
  footnotes.sort((a, b) => a.offset - b.offset);

  // filter by identifier
  let uniqueFootnotes = footnotes.filter(
    (item, i, ar) =>
      ar.findIndex((fn) => fn.identifier === item.identifier) === i
  );

  let counter = 0;

  // for each footnote after being sorted and cleaned etc
  uniqueFootnotes.forEach((footnote, footnoteIndex) => {
    let content = []; // store the content we're building below

    let renderLinkRef = renderRef({
      index: `${footnoteIndex + 1}`,
      label: `${footnoteIndex + 1}`,
      group: prefs.groupInclude,
      prefs,
    }); // render the reference number links

    if (footnote.type === 'footnote') {
      //eg. `[^1]: My footnote`
      content.push({
        type: 'paragraph',
        children: [...footnote.children],
      });
    }

    if (footnote.type === 'footnoteReference') {
      // eg. `This is a sentence[^1]
      // Find the footnote definition matching this reference
      let def = footnoteDefinitions.find(
        (item) => item.identifier === footnote.identifier
      );

      if (def) {
        // Add the footnote definition text to the content array
        content.push(...def.children);
      }
    }

    visit(markdownAST, `footnoteReference`, (node, index, parent) => {
      // Find the matching footnote definition
      let def = footnoteDefinitions.find(
        (item) => item.identifier === node.identifier
      );

      counter += 1;

      // Get the group of the definition
      let { group, text } = getTextAndGroup(def.identifier);

      if (prefs.groupInclude === group) {
        parent.children.splice(
          index,
          1,
          {
            type: 'jsx',
            value: '<>',
          },
          {
            type: 'jsx',
            value: `<${prefs.referenceComponent} id={${counter}}>`,
          },
          ...def.children[0].children,
          {
            type: 'jsx',
            value: `</${prefs.referenceComponent}>`,
          },
          {
            type: 'jsx',
            value: '</>',
          }
        );
      }
    });

    // add the back-reference
    if (content.length > 0) {
      if (
        (prefs.referenceLinkPosition || '').toLowerCase() === 'end'
      ) {
        content[0].children.push({
          type: 'html',
          value: renderLinkRef,
        });
      } else {
        content[0].children = [
          {
            type: 'html',
            value: renderLinkRef,
          },
          ...content[0].children,
        ];
      }

      // add list item
      list.children.push({
        type: 'listItem',
        children: content,
      });
    }
  });

  markdownAST.children = [].concat(
    markdownAST.children.slice(0, index),
    {
      type: 'html',
      value: `<div class="ref-notes refnotes--${prefs.groupInclude}">`,
    },
    list,
    {
      type: 'html',
      value: '</div>',
    },
    markdownAST.children.slice(index + 1)
  );
};

const transformer = (markdownAST, pluginOptions) => {
  console.log(pluginOptions);
  // transform backwards all refs-code blocks
  for (let i = markdownAST.children.length - 1; i >= 0; --i) {
    let node = markdownAST.children[i];
    if (node.type === 'code' && node.lang === 'references') {
      // set prefs
      let prefs = {
        referenceComponent: 'div',
        footnoteComponent: 'li',
        groupInclude: 'default',
        referenceLinkPrefix: '↑ ',
        referenceLinkSuffix: '.',
        referenceTextSuffix: ' ',
        ...keysToCamel(pluginOptions),
      };

      try {
        let parsePrefs = yaml.load(markdownAST.children[i].value);
        prefs = { ...prefs, ...keysToCamel(parsePrefs) };
      } catch (e) {
        console.log("Can't parse refs-configuration", e);
      }

      transformerRef({ markdownAST, index: i, prefs });
    }
  }
};

module.exports = ({ markdownAST }, pluginOptions) => {
  return transformer(markdownAST, pluginOptions);
};
