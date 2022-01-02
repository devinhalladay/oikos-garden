import algoliasearch from "algoliasearch/lite";
import { createRef, default as React, useState, useMemo, useRef } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import useClickOutside from "./use-click-outside";

const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
};

export default function Search({ indices }) {
  const rootRef = useRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <div ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBar onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          indices={indices}
          className={
            hasFocus ? "SearchResult--visible" : "SearchResult--hidden"
          }
        />
      </InstantSearch>
    </div>
  );
}
