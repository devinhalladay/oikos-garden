import React from 'react';
import Figure from './figure';
import Footnote from './footnote';

function findText(items, match) {
  if (typeof items === 'object') {
    console.log(items);
    // for (const item of items) {
    //   // Test current object
    //   if (item.props.mdxType === match) {
    //     return item;
    //   }

    //   // Test children recursively
    //   // if (Array.isArray(item.props.children)) {
    //   //   const child = findText(item.props.children, match);
    //   //   if (child) {
    //   //     return child;
    //   //   }
    //   // }
    // }
  }
}

function recursiveMap(children, fn) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
        parentNode: child.props.mdxType === 'Footnote' ? child : null,
      });
    }

    return fn(child);
  });
}

export default {
  // sup: (props) => <Footnote key={props.id} {...props} />,
  // footnoteReference: (props) => <h1 {...props}></h1>,
  Footnote: (props) => <Footnote key={props.id} {...props} />,
  Figure: (props) => <Figure {...props} />,
  wrapper: ({ children, ...props }) => {
    // console.log(
    //   recursiveMap(children, (c) => {
    //     console.log(c.props.mdxType);
    //   })
    // );
    // const updatedChildren = children.map((child, i) => {
    //   // console.log(child);

    const map = recursiveMap(children, (c, i) => {
      if (c.props.mdxType === 'Footnote') {
        console.log(c);
        console.log('fnote!!!');

        return React.cloneElement(c, {
          className: `fooooootnoteee`,
          parentNode: c.props.parentNode,
        });
      }

      return React.cloneElement(c, {
        parentNode: c.props.parentNode,
      });
      // }
    });

    //   // for (
    //   //   let index = 0;
    //   //   index < child.props.children.length;
    //   //   index++
    //   // ) {
    //   //   if ()
    //   //   // const element = child.props.children[index];
    //   //   // console.log(element);
    //   // }
    //   // child.props.mdxType === 'Footnote'
    //   // console.log(child.props.children);
    //   // console.log(child.props.mdxType == 'Footnote');

    //   // let thing = findText(child.props.children, 'Footnote');

    //   // console.log(findText(child.props.children, 'Footnote'));

    //   return child;
    // });
    // return <>{updatedChildren}</>;
    return <>{map}</>;
  },
};
