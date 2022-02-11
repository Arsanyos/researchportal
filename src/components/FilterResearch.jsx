import React from "react";

function FilterResearch() {
  return (
    <div className="filter-research-container">
      <div className="date-sort-container">
        <p>Sort by date</p>
        <ul id="date-sort">
          {/* make links appear downwards*/}
          <a href="">2014</a> {/* can I add an onClick function for a link?*/}
          <a href="">2013</a>
          <a href="">2012</a>
        </ul>
      </div>
      <div className="college-sort-container"></div>
    </div>
  );
}
export default FilterResearch;
