import React from "react";
import "../../Styles/Banner.css";
import Programmer from "../../images/undraw_firmware_re_fgdy.svg";
import resume from "../../images/resume.pdf";
import Shake from "react-reveal/Shake";
import Fade from "react-reveal/Fade";
import ParticlesBg from 'particles-bg'
const Banner = () => {
  return (
    <>
    <ParticlesBg type="thick" bg={true} />
      <div className="banner">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-5 col-sm-12">
              <Shake>
                <h5 className="text-uppercase text-white">
                  <span className="mern">MERN</span> stack developer{" "}
                </h5>
              </Shake>

              <h2 className="mt-4 text-capitalize fw-bold text-white">
                talk is cheap.
                <br />
                Show me the code
              </h2>
              <p className="text-capitalize text-white">
                i design and develop website and i love what i do
              </p>
              <a
                href={resume}
                className="resume-btn btn text-white text-uppercase"
              >
                resume
              </a>
              <a
                href="https://www.linkedin.com/in/dip-pal-107a8a203/"
                target="_blank"
                className="hire-btn btn-info ms-3 btn text-white text-uppercase"
              >
                hire me
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <Fade right>
              <img src={Programmer} className="w-100 banner-img" alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
