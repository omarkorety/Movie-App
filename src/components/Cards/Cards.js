import React from "react";
import "../Styles/portfolio.css";

const Cards = ({ title }) => {
  return (
    <div id="portfolioCards" className="card">
      <h2>{title}</h2>
    </div>
  );
};

export default Cards;
