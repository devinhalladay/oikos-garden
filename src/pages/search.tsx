import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import Search from "../components/Search";

interface SearchPage {}

const searchIndices = [
  { name: "oikos", title: "Oikos" },
  // { name: "notes", title: "Notes" },
  // { name: "works", title: "Works" },
];

const SearchPage: React.FC<SearchPage> = ({}) => {
  return (
    <Layout wide>
      <Search indices={searchIndices} />
    </Layout>
  );
};

export default SearchPage;
