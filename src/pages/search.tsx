import { graphql } from "gatsby";
import * as React from "react";

import EssayCard from "../components/EssayCard";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";
import Search from "../components/Search";
import SectionHeading from "../components/SectionHeading";

interface SearchPage {}

const searchIndices = [
  { name: "oikos", title: "Oikos" },
  // { name: "notes", title: "Notes" },
  // { name: "works", title: "Works" },
];

const SearchPage: React.FC<SearchPage> = ({}) => {
  return (
    <Layout wide>
      {process.env.NODE_ENV === "development" && (
        <Search indices={searchIndices} />
      )}
    </Layout>
  );
};

export default SearchPage;
