import React from "react";
import { Carousel } from "react-bootstrap";
import CoreTeam from "../../assets/CoreMembers/core.png";
import principal from "../../assets/Events/sample.png";
import "./teamslide.css";
function TeamCarousel() {
  return (
    <>
      <section className="section">
        <div className="container" style={{marginTop:"20px"}}>
          <div className="row justify-content-center">
            <div className="col-sm-5 col-lg-9 w-100vw">
              <Carousel fade>
                <Carousel.Item>
                  <img src={CoreTeam} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5 className="eventname">Core Team Members ( Foundation Team )</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={principal} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5 className="eventname">Our First Event</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCarousel;
