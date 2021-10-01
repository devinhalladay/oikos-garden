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

// render the html-tag in the footnote
const renderRef = ({ index, label, prefs }) => {
  let ref = `${index}`;
  return `<span class="footnote-ref flex-shrink-0 mr-2" id="ref-${ref}"><a id="use-ref-${ref}" href="#f-ref-${ref}" class="footnote-ref-link">↑ ${label}</a></span>`;
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
    data: {
      hProperties: {
        className: 'footnotes',
      },
    },
    spread: true, // add p tag around content
    children: [],
  };

  // register the inline footnotes
  visit(markdownAST, `footnote`, (node) => {
    footnotes.push({
      type: 'footnote',
      children: node.children,
      // identifier set like a group so it can never clash
      identifier: `:foootnote:--${node.position.start.offset}`,
      offset: node.position.start.offset,
    });
  });

  // register the footnote references
  // this is where your footnote text lives
  visit(markdownAST, `footnoteReference`, (node) => {
    footnotes.push({
      type: 'footnoteReference',
      identifier: node.identifier,
      offset: node.position.start.offset,
    });
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

      if (def) {
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
      // add list item
      list.children.push({
        type: 'listItem',
        data: {
          hProperties: {
            className: 'mb-3 flex',
          },
        },
        children: [
          {
            type: 'html',
            value: renderLinkRef,
          },
          ...content,
        ],
      });
    }
  });

  markdownAST.children = [].concat(
    markdownAST.children.slice(0, index),
    {
      type: 'jsx',
      value: `<div class="ref-notes">`,
    },
    list,
    {
      type: 'jsx',
      value: '</div>',
    },
    markdownAST.children.slice(index + 1)
  );
};

const transformer = (markdownAST, pluginOptions) => {
  // transform backwards all refs-code blocks
  for (let i = markdownAST.children.length - 1; i >= 0; --i) {
    let node = markdownAST.children[i];
    if (node.type === 'code' && node.lang === 'references') {
      // set prefs
      let prefs = {
        referenceComponent: 'div',
        footnoteComponent: 'li',
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
