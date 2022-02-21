import React from "react";
import notFound from "./not-found.jpg";

function NotFound() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container">
        <img src={notFound} class="img-fluid" width="100%" alt="Not Found"></img>;
      </div>
    </div>
  );
}

export default NotFound;
