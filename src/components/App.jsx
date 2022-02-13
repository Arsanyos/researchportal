import React, { useState } from "react";
import jsonData from "../RESEARCH_DATA.json";
//importing components
import CompResearch from "./CompResearch.jsx";
import FilterResearch from "./FilterResearch.jsx";
import Navbar from "./Navbar.jsx";
//importing style
import "../style/App.css";

function App() {
  const [researches, setResearches] = useState(jsonData);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-content">
        {/*add padding*/}
        <FilterResearch />
        <CompResearch
          researches={researches}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
}
export default App;
