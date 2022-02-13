import React, { useState, useEffect } from "react";
function FilterResearch() {
  const [years, setYears] = useState([2014, 2013, 2012, 2011, 2010]);
  function handleYearSort(e) {}
  return (
    <div className="filter-research-container">
      <div className="date-sort-container">
        <p>Sort by date</p>
        <ul id="date-sort">
          {years.map((year) => {
            return (
              <li>
                <span onClick={handleYearSort}>{year}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="custom-sort-container">
        <p className="custom-sort-title">Custom range</p>
        <div className="sort-container">
          <input className="sort-year" type="number" />
          -
          <input className="sort-year" type="number" />
          <br />
          <button className="search-sort">search</button>
        </div>
        <div className="college-sort-container">
          <p className="college-sort-title">Sort by college</p>
          <ul id="college-sort">
            <li>
              <a href="">College of Architecture and Civil Engineering</a>
            </li>
            <li>
              <a href="">College of Applied Science</a>
            </li>
            <li>
              <a href="">College of Biological and Chemical Engineering</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FilterResearch;
