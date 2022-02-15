import React, { useState, useEffect } from "react";
import jsonData from "../RESEARCH_DATA.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing components
import Home from "./Home";
import Submit from "../routes/Submit";
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
    <BrowserRouter>
      <div className="app">
        <div className="nav">
          <Navbar
            jsonData={jsonData}
            setsortedResearches={setsortedResearches}
          />
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  researches={researches}
                  sortedResearches={sortedResearches}
                  setsortedResearches={setsortedResearches}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  tempYear={tempYear}
                  settempYear={settempYear}
                />
              }
            />
            <Route
              path="/submit"
              element={
                <Submit
                  jsonData={jsonData}
                  researches={researches}
                  sortedResearches={sortedResearches}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
