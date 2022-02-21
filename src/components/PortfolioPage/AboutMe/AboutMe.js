import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container my-5">
      <div className="row">
        <div className="col-sm-4 col-md-2">
          <h1>About Me</h1>
        </div>
        <div className="col-sm-8 col-md-9">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo pariatur eum, nobis
            molestias autem officia quod atque enim libero corrupti eius exercitationem provident!
            Fuga voluptates ab magnam cumque, a corporis iste neque quam quisquam velit officiis
            aspernatur nihil ipsam accusantium architecto similique dolore incidunt eaque aliquam
            dicta numquam. Itaque, iure.
          </div>
          <button className="my-5 downBtn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
