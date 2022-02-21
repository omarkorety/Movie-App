import React from "react";
import searchIcon from "./imgs/searchIcon.svg";

function Search(props) {
  return (
    <div className="container mt-3">
      <div className="search">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="searchInput">
              <input type="text" placeholder="Search Movies..." onChange={props.onChange} />
              <span>
                <img src={searchIcon} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
