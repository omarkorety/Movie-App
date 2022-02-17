import React from "react";
import "../Styles/portfolio.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="header">
            <h1 className="col text-center my-5">Skills</h1>
          </div>
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet, debitis esse aut ea doloribus necessitatibus quidem
              facere laboriosam tenetur optio eius obcaecati tempore eaque at vitae quisquam perspiciatis voluptas dolorum sequi porro iure
              unde perferendis officiis. Natus delectus magni, dolore ab tempore non adipisci sint distinctio maiores, voluptatibus
            </p>
          </div>
          <div className="col-md-6 text-center ">
            <div className="container">
              <h1 className="myFocus">MY FOCUS</h1>
              <p>Node JS</p>
              <p>Express</p>
              <p>Angular</p>
              <p>React</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div className="col-md-6">
            <div class="progress">
              <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
              <div class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
              <div class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
              <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
