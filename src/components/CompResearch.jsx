/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import jsonData from "../RESEARCH_DATA.json";
//import react-paginate
import ReactPaginate from "react-paginate";

function CompResearch() {
  const [researches, setResearches] = useState(jsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const researchPerPage = 8;
  const researchesVisited = pageNumber * researchPerPage;

  const displayResearches = researches
    .slice(researchesVisited, researchesVisited + researchPerPage)
    .map((research) => {
      return (
        <tbody key={research.id}>
          <tr>
            <td>{research.investegator}</td>
            <td>{research.title}</td>
            <td>{research.funding}</td>
          </tr>
        </tbody>
      );
    });
  const pageCount = Math.ceil(researches.length / researchPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
export default CompResearch;
