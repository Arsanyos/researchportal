import React, { useState } from "react";
import jsonData from "../RESEARCH_DATA.json";
//import react-paginate
import ReactPaginate from "react-paginate";

function CompResearch() {
  const [researches, setResearches] = useState(jsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const researchPerPage = 5;
  const researchesVisited = pageNumber * researchPerPage;

  const displayResearches = researches
    .slice(researchesVisited, researchesVisited + researchPerPage)
    .map((research) => {
      return (
        <tbody>
          <tr>
            <td>{research.investegator}</td>
            <td>{research.title}</td>
            <td>{research.funding}</td>
          </tr>
        </tbody>
      );
    });

  return (
    <div className="compResearch-container">
      <div className="compResearch-container-title">
        <h3>AASTU Researches</h3>
        <p className="completed-research-projects">
          Completed Research projects
        </p>
      </div>

      <table id="research-list">
        <thead>
          <tr>
            <th>Principal investigator</th>
            <th>Research project title</th>
            <th>Funding source</th>
          </tr>
        </thead>
        {displayResearches}
      </table>
    </div>
  );
}
export default CompResearch;
