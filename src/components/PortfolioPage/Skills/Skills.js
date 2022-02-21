import React from "react";
import Progress from "../Progress/Progress";
import MainSkills from "./MainSkills";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet, debitis esse
              aut ea doloribus necessitatibus quidem facere laboriosam tenetur optio eius obcaecati
              tempore eaque at vitae quisquam perspiciatis voluptas dolorum sequi porro iure unde
              perferendis officiis. Natus delectus magni, dolore ab tempore non adipisci sint
              distinctio maiores, voluptatibus
            </p>
          </div>
          <div className="col-md-6 text-center ">
            <div className="container">
              <h1 className="myFocus">MY FOCUS</h1>
              <MainSkills name="Node Js" />
              <MainSkills name="Express" />
              <MainSkills name="Angular" />
              <MainSkills name="React" />
              <MainSkills name="MongoDB" />
            </div>
          </div>
          <div className="col-md-6">
            <Progress width="w-50" name="HTML" />
            <Progress width="w-75" name="JS" />
            <Progress width="w-50" name="CSS" />
            <Progress width="w-25" name="React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
