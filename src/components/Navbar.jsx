import React from "react";
//components
import SearchBar from "./SearchBar";

function Navbar() {
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
          <img
            className="home-icon"
            src={require("/home/arsan/Documents/class/Intership-project/researchportal/src/image/home.png")}
            width="30px"
            height="30px"
            alt="home-icon"
          />
          <button className="submit-research-button" type="submit">
            Submit
          </button>
        </div>
        <SearchBar
          placeholder="Search.."
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Navbar;
