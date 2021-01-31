import React from "react";

const About = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6">
            <h2 style={{ borderRight: "1px solid gray" }}>Why this project?</h2>
          </div>
          <div className="col-lg-6">
            <p className="lead">
              The divide between science and tech is rapidly becoming smaller
              and smaller. However, one problem that has yet to be addressed
              effectively is the challenge for labs moving from manual analysis
              to model-model driven analysis. <br />
              <br />
              If you are a lab that requires a custom and adaptable solution to
              set up a quick and easy multi-sensor collection system, then you
              have come to the right place! <br />
              <br />
              Lastly, we also believe in Open Data. It helps with
              reproducibility, providing additional evidence of results, and
              reducing the need for additional animal experiments. <br />
              <br />
              We hope our high quality data will be a major contribution to the
              future of Open Data in life sciences and beyond. It is clear that
              a better system is needed and we aren't Just Another Openlab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
