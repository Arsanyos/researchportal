import React from "react";
//importing components
import CompResearch from "./CompResearch.jsx";
import FilterResearch from "./FilterResearch.jsx";
import Navbar from "./Navbar.jsx";
//importing style
import "../style/App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main-content">
        {/*add padding*/}
        <FilterResearch />
        <CompResearch />
      </div>
    </div>
  );
}
export default App;
