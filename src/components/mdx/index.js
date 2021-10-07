import React from 'react';
import SectionHeading from '../SectionHeading';
import Figure from './figure';
import Footnote from './footnote';
import Heading from './headings';

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
  Footnote: (props) => <Footnote key={props.id} {...props} />,
  Figure: (props) => <Figure {...props} />,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  wrapper: (props) => {
    const { children } = props;
    const map = recursiveMap(children, (c, i) => {
      if (c.props.mdxType === 'Footnote') {
        return React.cloneElement(c, {
          className: `footnote`,
          parentNode: c.props.parentNode,
        });
      }

      // if (c.props.className === 'table-of-contents') {
      //   return (
      //     <div className="text-domain-red absolute right-0 w-80">
      //       {children}
      //     </div>
      //   );
      // }

      if (c.props.className === 'footnotes') {
        return (
          <div className="mt-12 text-base">
            <SectionHeading title="Reference Notes" />
            {React.cloneElement(c, {
              className: 'footnotes',
              parentNode: c.props.parentNode,
            })}
          </div>
        );
      }

      return React.cloneElement(c, {
        parentNode: c.props.parentNode,
      });
    });

    return <>{map}</>;
  },
};
