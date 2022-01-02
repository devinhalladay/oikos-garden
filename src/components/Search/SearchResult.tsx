import { Link } from "gatsby";
import { default as React } from "react";
import { Hit } from "react-instantsearch-core";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import EssayCard from "../EssayCard";
import NoteCard from "../NoteCard";

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const PageHit = ({ hit, indexName }: { hit: Hit; indexName: string }) => {
  if (indexName === "oikos") {
    return <EssayCard post={hit} />;
  } else if (indexName === "notes") {
    return <NoteCard note={hit} />;
  }

  return (
    <div>
      <Link to={hit.slug}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  );
};

const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits
        hitComponent={({ hit }) => <PageHit hit={hit} indexName={index.name} />}
      />
    </Index>
  );
};

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
