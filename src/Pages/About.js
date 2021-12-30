import React from "react";
import developer from "../images/developer.svg";
import "../Styles/About.css";
import { MdArrowForwardIos } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";
import ParticlesBg from "particles-bg";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import { FaLongArrowAltLeft } from 'react-icons/fa';
const About = () => {
    const history = useHistory();
    const location = useLocation();
    const handleClick =( )=> {
        history.push(location?.from || "/home");
    }
  return (
    <>
     
      <div className="about-me">
      <ParticlesBg
        type="lines"
        bg={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height:"100% !important"
        }}
        bg={true}
      />
        <div className="container">
            <button className='text-center mt-5 d-inline-block btn text-white' onClick={handleClick}><FaLongArrowAltLeft className="me-3" />Back</button>
          <Shake>
            <h2 className="text-uppercase text-center my-5 fw-bold">
              about <span style={{ color: "var(--main-color)" }}>me</span>
            </h2>
          </Shake>
          <div className="row  justify-content-between">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <Fade left>
                <img src={developer} className="w-100 img-fluid" />
              </Fade>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <p className="mb-5">
                Hi, I'm Dip. Passionate web developer eager to contribute to
                team success through hard work, attention to detail, and
                excellent organizational skills.I love programming thats why i
                give my best to it. Motivated to learn. I wake up every morning
                excited to be as productive every day as I can.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="my-infos-left">
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">Name : </h5>
                      <p className="text-capitalize">Dip Pal</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">
                        website :{" "}
                      </h5>
                      <p className="text-info">dippal.netlify.app</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">phone : </h5>
                      <p className="text-capitalize">+123 456 7890</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">city : </h5>
                      <p className="text-capitalize">Jamalpur Sadar</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="my-infos-right">
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">age : </h5>
                      <p className="text-capitalize">18</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">
                        degree :{" "}
                      </h5>
                      <p className="">N/A</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">email : </h5>
                      <p className="text-capitalize">dip.pal.513@gmail.com</p>
                    </div>
                    <div className="info-single d-flex">
                      <MdArrowForwardIos className="info-logo me-3" />
                      <h5 className="text-capitalize me-2 fw-bold">
                        freelance :{" "}
                      </h5>
                      <p className="text-capitalize">N/A</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills mt-3">
                <h3 className="fw-bold">My skills</h3>
                <div className="all-skills mt-4">
                  <div className="single-skill mt-3">
                    <h5
                      className="text-capitalize fw-bold"
                      style={{ color: "var(--main-color)" }}
                    >
                      expertise
                    </h5>
                    <h5 className="ms-4 fw-light">
                      React JS, Javascript, React Bootstrap, Css3, Bootstrap5,
                      Tailwind,Html, SASS
                    </h5>
                  </div>
                  <div className="single-skill mt-3">
                    <h5
                      className="text-capitalize fw-bold"
                      style={{ color: "var(--main-color)" }}
                    >
                      comfortable
                    </h5>
                    <h5 className="ms-4 fw-light">
                      Node JS, Express JS, Mongo DB, Material UI, JSON Web
                      Tokens(JWT)
                    </h5>
                  </div>
                  <div className="single-skill mt-3">
                    <h5
                      className="text-capitalize fw-bold"
                      style={{ color: "var(--main-color)" }}
                    >
                      tools
                    </h5>
                    <h5 className="ms-4 fw-light">
                      Git, Vs Code, Chrome Dev Tools, Heroku, Netlify, Firebase
                    </h5>
                  </div>
                </div>
              </div>
              <div className="education">
                <h4 className="text-capitalize mt-4 fw-bold" style={{color:"var(--main-color)"}}>My education</h4>
                <h5 className="text ms-4">Learning HSC</h5>
              </div>
              <div className="interest">
                <h4 className="text-capitalize mt-4 fw-bold mb-3" style={{color:'var(--main-color)'}}>interests</h4>

                <div className="info-single d-flex ms-4">
                  {/* <MdArrowForwardIos className="info-logo me-3" /> */}
                  <h5 className="text-capitalize me-2 ">art</h5>
                </div>
                <div className="info-single d-flex ms-4">
                  {/* <MdArrowForwardIos className="info-logo me-3" /> */}
                  <h5 className="text-capitalize me-2 ">Photography</h5>
                </div>
                <div className="info-single d-flex ms-4">
                  {/* <MdArrowForwardIos className="info-logo me-3" /> */}
                  <h5 className="text-capitalize me-2 ">Gardening</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
