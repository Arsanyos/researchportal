import React, { useState } from "react";
import { Link } from "react-router-dom";
//components
import SearchBar from "./SearchBar";
//importing fuse
import Fuse from "fuse.js";

function Navbar({
  jsonData,
  searchedData,
  setsearchedData,
  setsortedResearches,
}) {
  const [data, setData] = useState(jsonData);
  const searchData = (pattern) => {
    if (!pattern) {
      setData(jsonData);
      return;
    }
    const fuse = new Fuse(data, {
      keys: ["title", "collegeSubmitedTo", "author.firstName"],
    });
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
      setsortedResearches(data);
    }
  };
  return (
    <div className="nav-bar">
      <div className="aastu">
        <img
          class="aastu-logo"
          src={require("/home/arsan/Documents/class/Intership-project/researchportal/src/image/aastu_log.png")}
          width="150px"
          height="150px"
          alt="aastu-logo"
        />
        <p>Addis Ababa Science and Technology University</p>
      </div>
      <div className="submit-search-container">
        <div className="icon-button-container">
          <Link to="/">
            <img
              className="home-icon"
              src={require("/home/arsan/Documents/class/Intership-project/researchportal/src/image/home.png")}
              width="30px"
              height="30px"
              alt="home-icon"
            />
          </Link>

          <Link to="/submit">
            <button className="submit-research-button" type="submit">
              Submit
            </button>
          </Link>
        </div>
        <SearchBar
          placeholder="Search.."
          onChange={(e) => searchData(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Navbar;
