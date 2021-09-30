// const visit = require('unist-util-visit');
// const toString = require('mdast-util-to-string');

// module.exports = ({ markdownAST }, pluginOptions) => {
//   // visit(markdownAST, 'linkReference', (refNode) => {
//   //   const { referenceType, identifier: refId } = refNode;

//   //   let refHtml = `
//   //       <span style="color: red">
//   //         test
//   //       </span>
//   //     `;
//   //   let newRefText;

//   //   // If the node is a shortcut link and starts with `^` it is a footnote
//   //   if (referenceType === 'shortcut' && refId.startsWith('^')) {
//   //     // Visit all definition nodes, which are created via `[^1]: Note`
//   //     // console.log(refNode);
//   //     // visit(tree, 'footnoteDefinition', (defNode) => {
//   //     //   console.log(defNode);
//   //     //   // If the definition identifier and reference identifer are the same,
//   //     //   // we have a match.
//   //     //   // if (defNode.identifier === refNode.identifier) {
//   //     //   //   // newRefText = defNode.
//   //     //   // }
//   //     // });
//   //   }

//   //   // refNode.type = 'html';
//   //   // refNode.children = undefined;
//   //   // refNode.value = refHtml;
//   // });

//   visit(markdownAST, 'heading', (node) => {
//     let { depth } = node;

//     // Skip if not an h1
//     if (depth !== 1) return;

//     // Grab the innerText of the heading node
//     let text = toString(node);

//     const html = `
//         <h1 style="color: red">
//           ${text}
//         </h1>
//       `;

//     node.type = 'html';
//     node.children = undefined;
//     node.value = html;
//   });

//   return markdownAST;
// };
