import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://media.nojoto.com/content/media/3969417/2021/07/profile/423a6c9a48406b490a019a4b374aeaaf_3969417/default.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                My self Rishav Kumar Singh Asst. Prof. Cum Full Stack Developer. Belongs from Town of Maa Tarachandi Dham, Sasaram, Bihar currently working in Ganga Global Institute of Management Studies, Begusarai. And pursuing Ph.D in Computer Science from Asian International University, Manipur. I wrote 2 Research Paper and wanna do something special in my Life.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
