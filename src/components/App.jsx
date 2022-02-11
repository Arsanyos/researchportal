import React from "react";
//importing components
import CompResearch from "./CompResearch.jsx";
import Navbar from "./Navbar.jsx";
//importing style
import "../style/App.css";
function App() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="app-content"></div>
    </div>
  );
}
export default App;
