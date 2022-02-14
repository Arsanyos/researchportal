import React from "react";
import Navbar from "../components/Navbar";
function Submit({ jsonData, setsortedResearches }) {
  return (
    <div className="submit-container">
      <div className="nav">
        <Navbar jsonData={jsonData} setsortedResearches={setsortedResearches} />
      </div>
      <h2>wow</h2>
    </div>
  );
}
export default Submit;
