import React, { useState, useEffect } from "react";
import jsonData from "../RESEARCH_DATA.json";

//importing components
import CompResearch from "./CompResearch.jsx";
import FilterResearch from "./FilterResearch.jsx";
import Navbar from "./Navbar.jsx";
//importing style
import "../style/App.css";
//importing fuse.js

function App() {
  const [researches, setResearches] = useState(jsonData);
  const [sortedResearches, setsortedResearches] = useState(researches);
  const [pageNumber, setPageNumber] = useState(0);
  const [tempYear, settempYear] = useState(0);
  return (
    <div className="app">
      <div className="nav">
        <Navbar jsonData={jsonData} setsortedResearches={setsortedResearches} />
      </div>
      <div className="main-content">
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
    </div>
  );
}
export default App;
