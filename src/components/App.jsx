import React, { useState, useEffect } from "react";
import jsonData from "../RESEARCH_DATA.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing components
import Home from "./Home";
import Submit from "../routes/Submit";
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
        <Home
          researches={researches}
          sortedResearches={sortedResearches}
          setsortedResearches={setsortedResearches}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          tempYear={tempYear}
          settempYear={settempYear}
        />
      </div>
    </div>
  );
}
export default App;
