import React from "react";

function compResearch() {
  return (
    <div className="compResearch-container">
      <div className="compResearch-container-title">
        <h4>AASTU researchs</h4>
        <h2>Completed Research projects</h2>
      </div>
      <table id="research-list">
        {/*Center inside parent container(compResearch)*/}
        <tr>
          <th>Principal investigator</th>
          <th>Research project title</th>
          <th>Funding source</th>
        </tr>
        <tr>
          <td>Zelalem desalge</td>
          <td>Assesment of AI in agriculture</td>
          <td>Internal</td>
        </tr>
      </table>
    </div>
  );
}
export default compResearch;
