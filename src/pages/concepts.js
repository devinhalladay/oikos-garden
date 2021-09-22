import React from "react";
import { graphql } from "gatsby";

function ConceptsPage({ data }) {
  return (
    <div>
      {data.allMdx.group.map((item) => (
        <li class="card--assemblage">
          <a href="/">
            <p class="title">{item.title}</p>
          </a>
        </li>
      ))}
    </div>
  );
}

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMdx {
      group(field: frontmatter___topics) {
        totalCount
        title: fieldValue
      }
    }
  }
`;

export default ConceptsPage;
