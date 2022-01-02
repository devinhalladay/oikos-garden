import { Link } from "gatsby";
import Masonry from "react-masonry-css";
import { default as React } from "react";
import { Hit } from "react-instantsearch-core";
import {
  connectStateResults,
  Highlight,
  connectHits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import EssayCard from "../EssayCard";
import NoteCard from "../NoteCard";
import WorkCard from "../WorkCard";

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const Hits = ({ hits, indexName }: { hits: Hit[]; indexName: string }) => {
  return (
    <Masonry
      breakpointCols={3}
      className="flex -ml-8 w-auto"
      columnClassName="pl-8 flex flex-col gap-8 bg-clip-padding"
    >
      {hits.map((hit) =>
        hit.internal?.type === "BrainNote" ? (
          <NoteCard note={hit} key={hit.objectID} />
        ) : hit.fields?.source === "essays" ? (
          <EssayCard post={hit} key={hit.objectID} />
        ) : hit.fields?.source === "works" ? (
          <WorkCard work={hit} key={hit.objectID} />
        ) : (
          <div key={hit.objectID}>
            <Link to={hit.slug}>
              <h4>
                <Highlight attribute="title" hit={hit} tagName="mark" />
              </h4>
            </Link>
            <Snippet attribute="excerpt" hit={hit} tagName="mark" />
          </div>
        )
      )}
    </Masonry>
  );
};

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <CustomHits indexName={index.name} />
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
