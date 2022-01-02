import { Link } from "gatsby";
import {
  MasonryGrid,
  JustifiedGrid,
  FrameGrid,
  PackingGrid,
} from "@egjs/react-grid";
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
  return hits
    .sort(() => Math.random() - 0.5)
    .map((hit) =>
      indexName === "oikos" ? (
        <div data-grid-column="2">
          <EssayCard post={hit} />
        </div>
      ) : indexName === "notes" ? (
        <NoteCard note={hit} />
      ) : indexName === "works" ? (
        <WorkCard work={hit} />
      ) : (
        <div>
          <Link to={hit.slug}>
            <h4>
              <Highlight attribute="title" hit={hit} tagName="mark" />
            </h4>
          </Link>
          <Snippet attribute="excerpt" hit={hit} tagName="mark" />
        </div>
      )
    );
};

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <HitCount />

      <CustomHits indexName={index.name} />
    </Index>
  );
};

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    <MasonryGrid
      className="container"
      gap={5}
      defaultDirection={"end"}
      align={"justify"}
      column={4}
    >
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
    </MasonryGrid>
    <PoweredBy />
  </div>
);

export default SearchResult;
