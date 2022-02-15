/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import react-paginate
import ReactPaginate from "react-paginate";

function CompResearch(props) {
  const researchPerPage = 8;
  const researchesVisited = props.pageNumber * researchPerPage;
  const displayResearches = props.sortedResearches
    .slice(researchesVisited, researchesVisited + researchPerPage)
    .map((research) => {
      return (
        <tbody>
          <tr>
            <td>{research.author.firstName}</td>
            <td>{research.title}</td>
            <td>{research.funding}</td>
          </tr>
        </tbody>
      );
    });

  const pageCount = Math.ceil(props.researches.length / researchPerPage);
  const changePage = ({ selected }) => {
    props.setPageNumber(selected);
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
