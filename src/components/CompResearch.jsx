import React from "react";

function compResearch() {
  return (
    <div className="compResearch-container">
      <div className="compResearch-container-title">
        <h3>AASTU Researches</h3>
        <p className="completed-research-projects">
          Completed Research projects
        </p>
      </div>

      <table id="research-list">
        {/*Center inside parent container(compResearch)*/}
        <thead>
          <tr>
            <th>Principal investigator</th>
            <th>Research project title</th>
            <th>Funding source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zelalem desalge</td>
            <td>Assesment of AI in agriculture</td>
            <td>Internal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default compResearch;
