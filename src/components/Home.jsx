import React from "react";
//importing comps
import CompResearch from "./CompResearch";
import FilterResearch from "./FilterResearch";
function Home({
  researches,
  pageNumber,
  sortedResearches,
  setsortedResearches,
  setPageNumber,
  tempYear,
  settempYear,
}) {
  return (
    <div className="home">
      <FilterResearch
        researches={researches}
        tempYear={tempYear}
        settempYear={settempYear}
        sortedResearches={sortedResearches}
        setsortedResearches={setsortedResearches}
      />
      <CompResearch
        sortedResearches={sortedResearches}
        researches={researches}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
export default Home;
