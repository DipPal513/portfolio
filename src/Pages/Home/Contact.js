import React from "react";
import "../../Styles/contactUs.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info">
              <div className="info-item d-flex">
                <span className="logo">
                  <BiHomeAlt />
                </span>
                <div className="info ms-3">
                  <h5 className="text-capitalize">california, United States</h5>
                  <p className="text-muted">Santa monica bullevard</p>
                </div>
              </div>
              <div className="info-item d-flex my-3">
                <span className="logo">
                  <BiHomeAlt />
                </span>
                <div className="info ms-3 ">
                  <h5 className="text-capitalize">00 (440) 9865 562</h5>
                  <p className="text-muted">Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <span className="logo">
                  <AiOutlineMail />
                </span>
                <div className="info ms-3">
                  <h5 className="text-capitalize">support@colorlib.com</h5>
                  <p className="text-muted">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="text-uppercase fw-bold mb-4">
              contact <span style={{ color: "#b73361" }}>me</span>
            </h2>
            <form>
              <div class="form-group">
                <input
                  type="name"
                  class="form-control border-0"
                  id="exampleInputEmail1"
                  style={{background:'#000',color:"white"}}
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="email"
                  class="form-control border-0"
                  style={{background:'#000',color:"white"}}
                  id="exampleInputPassword1"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  cols={6}
                  rows={4}
                  class="form-control border-0 outline-0"
                  style={{background:'#000',color:"white"}}
                  id="exampleInputPassword1"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" class="btn mt-4" style={{ background: "#b73361",color:'#fff' }}>
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
