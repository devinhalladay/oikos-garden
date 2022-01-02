import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput w-full h-20 border-gray-300 bg-white shadow border rounded-md text-center text-4xl font-sans font-light mb-16 focus:border-2 focus:border-red focus:outline-none"
        type="text"
        placeholder="Search the oikos..."
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  )
);
