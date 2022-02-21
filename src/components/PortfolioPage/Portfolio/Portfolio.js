import React from "react";
import Cards from "../Cards/Cards";

const projects = ["Web Design", "UI-UX", "Back-End", "Front-End", "Logo Design", "Android Project"];

const portfolio = () => {
  return (
    <div className="portfolioSection">
      <div className="container">
        <div className="row">
          <h1 className="col-md-12 text-center my-5">Portfolio</h1>
          <div className="row mx-0">
            {projects.map((value) => {
              return (
                <div className="col-md-4 my-4">
                  <Cards title={value} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
