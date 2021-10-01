import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SectionHeading from '../components/SectionHeading';
import TagLink from '../components/TagLink';
import PageHeading from '../components/PageHeading';

const TagsPage = ({
  data: {
    allMdx: { group: mdxTags },
    allBrainNote: { group: brainTags },
  },
}) => {
  const allTags = [...mdxTags];

  let alphabetizedTags = allTags.reduce((r, e) => {
    // get first letter of name of current element
    let group = e.tag[0];
    // if there is no property in accumulator with this letter create it
    if (!r.find((item) => item.letter === group))
      r.push({ letter: group, children: [e] });
    // if there is push current element to children array for that letter
    else r.find((item) => item.letter === group).children.push(e);
    // return accumulator
    return r;
  }, []);

  return (
    <Layout width="wide">
      <Helmet title="Concepts • Infinite Caesura" />
      <PageHeading
        title="Concepts Index"
        subtitle={
          <>
            Entries in this wiki are tagged by{' '}
            <strong>concept</strong> for easy discovery. You may
            browse all entries under a given topic.
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 gap-y-16">
        {alphabetizedTags.map((group, i) => {
          return (
            <div className="">
              <SectionHeading
                title={
                  <>
                    {group.letter}{' '}
                    <span className="text-gray-500 font-normal">
                      is for{' '}
                      <span className="italic">
                        {
                          group.children[
                            Math.floor(
                              Math.random() * group.children.length
                            )
                          ].tag
                        }
                      </span>
                    </span>
                  </>
                }
              />
              {group.children.map((t) => {
                return (
                  <div>
                    <TagLink
                      tag={t.tag}
                      size="lg"
                      count={t.totalCount}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/essays/" } }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }

    allBrainNote {
      group(field: childMdx___frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
