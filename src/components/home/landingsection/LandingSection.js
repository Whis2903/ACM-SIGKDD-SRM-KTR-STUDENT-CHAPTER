import React from "react";
import "./LandingSection.css";
import { NavLink } from "react-router-dom";
import aditya from "./images/aditya.png";
import orangeLine from "./images/orange-line.png";
import purpleLine from "./images/purple-line.png";
import blueLine from "./images/blue-line.png";
import smPurpleLine from "./images/sm-purple-line.png";

const LandingSection = (props) => {
  return (
    <>
      <section className="landing-section section h-100vh">
          <div className="container" style={{marginTop:"10px"}}>
            <div className="gbc1"></div>
            <div className="row justify-content-between mt-3">
              <div className="col-3 ">
                <div className="d-flex">
                  <img
                    className="dashed-line-divider"
                    src={purpleLine}
                    alt="purple-dashedline"
                  />
                </div>
                <div className="profile-info pb-3">
                  <img className="profile-image-blue" src={aditya} alt="developer" />
                  <span className="bottom-0 ">Developer</span>
                </div>
              </div>

              <div className="col-2 ">
                <div className="d-flex">
                  <img
                    className="dashed-line-divider"
                    src={orangeLine}
                    alt="orange-dashedline"
                  />
                </div>
                <div className="profile-info">
                  <img className="profile-image-orange" src={aditya} alt="coder"/>
                  <span className="top-0" style={{border: "2px dashed orange"}}>Coder</span>
                </div>
              </div>
            </div>

            <div className="row justify-content-center text-center">
              <div className="col-lg-10 text-center">
                <h1 className="title">
                  Welcome to,
                  <br />
                  <span style={{ color: "var(--secondary-color)" }}>
                    ACM SIGKDD
                  </span>{" "}
                  Student Chapter <br/>{props.chaptername}
                </h1>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <p className="description">{props.description}</p>
              </div>
            </div>
            <div className="row justify-content-center gap-4">
              <div className="col-2 ">
                <div className="d-flex">
                  <img
                    className="dashed-line-dividerr"
                    src={blueLine}
                    alt="dashedline-yellow"
                  />
                </div>
                <div className="profile-info">
                  <img className="profile-image-blue" src={aditya} alt="designer" />
                  <span className="top-0 ">Designer</span>
                </div>
              </div>
              <div className="col-3">
                <NavLink to={props.link} className="join-button btn">
                  Check out our Team
                </NavLink>
              </div>
              <div className="col-2 ml-auto">
                <div className="d-flex">
                  <img
                    className="dashed-line-dividerrr"
                    src={smPurpleLine}
                    alt="smPurple-dashedline"
                  />
                </div>
                <div className="profile-info pb-3">
                  <img className="profile-image-blue" src={aditya} alt="Marketing" />
                  <span className="bottom-0 ">Marketing</span>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default LandingSection;