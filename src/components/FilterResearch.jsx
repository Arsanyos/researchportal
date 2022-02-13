import React, { cloneElement, useState } from "react";
import collegeData from "../COLLEGES_DATA.json";
var _ = require("lodash");

function FilterResearch(props) {
  const [cData, setcData] = useState(collegeData);
  const [years, setYears] = useState([2014, 2013, 2012, 2011, 2010]);
  // -------
  function handleYearSort(e) {
    let newData = [];
    newData = props.researches.filter(
      (data) => data.yearPublished === e.target.innerText
    );
    props.setsortedResearches(newData);
    console.log(props.sortedResearches);
  }
  function handleCollegeSort(e) {
    let Data = [];
    Data = props.researches.filter(
      (data) => data.collegeSubmitedTo === _.lowerCase(e.target.innerText)
    );
    props.setsortedResearches(Data);
  }
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
            {cData.map((college) => {
              return (
                <li key={college.id}>
                  <span onClick={handleCollegeSort}>
                    {college.collegeTitle}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FilterResearch;
