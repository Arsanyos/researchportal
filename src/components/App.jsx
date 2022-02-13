import React, { useState, useEffect } from "react";
import jsonData from "../RESEARCH_DATA.json";
//importing components
import CompResearch from "./CompResearch.jsx";
import FilterResearch from "./FilterResearch.jsx";
import Navbar from "./Navbar.jsx";
//importing style
import "../style/App.css";

function App() {
  const [researches, setResearches] = useState(jsonData);
  const [sortedResearches, setsortedResearches] = useState(researches);
  const [pageNumber, setPageNumber] = useState(0);
  const [tempYear, settempYear] = useState(0);

  useEffect(() => {
    console.log(sortedResearches);
  }, [sortedResearches]);
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-content">
        <FilterResearch
          researches={researches}
          jsonData={jsonData}
          tempYear={tempYear}
          settempYear={settempYear}
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
