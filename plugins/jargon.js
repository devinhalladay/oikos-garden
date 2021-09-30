const visit = require('unist-util-visit');
// const toString = require('mdast-util-to-string');

const remarkJargon = (options) => {
  if (!options || !options.jargon) {
    throw Error(
      'Required "jargon" option is missing in remark-jargon configuration'
    );
  }

  const isJargon = (node) => {
    if (
      node.children.length === 1 &&
      node.children[0].type === 'text' &&
      Object.keys(options.jargon).indexOf(
        node.children[0].value.toLowerCase()
      ) !== -1
    )
      return true;

    return false;
  };

  const visitor = (node) => {
    if (isJargon(node)) {
      let term = node.children[0].value;
      let html = options.jargon[term.toLowerCase()];
      let value = `<span class="jargon-term">${term}<span class="jargon-info">${html}</span></span>`;
      let position = node.children[0].position;
      position.end.column =
        position.end.column + value.length - term.length;
      position.end.offset = position.end.column - 1;
      node.children = [
        {
          type: 'html',
          value,
          position,
          indent: node.children[0].indent,
        },
      ];
    }
  };

  const transform = (tree) => {
    visit(tree, 'emphasis', visitor);
  };

  return transform;
};

module.exports = ({ markdownAST }, options) => {
  const transformer = remarkJargon(options);

  transformer(markdownAST, options);
};
