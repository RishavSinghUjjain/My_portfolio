import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          {/* Here types about your project */}
        </p>
        {/* card design */}
        <div className="row justify-content-center" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/blogs/shutterstock_1504004246.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">Springboot</span>
                  <span className="card-detail-badge">MySQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Pension management system
                    </h6>
                  </div>
                  <a className="ad-btn" target="_blanck" href="https://github.com/RishavSinghUjjain/PensionManagementService.git">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
