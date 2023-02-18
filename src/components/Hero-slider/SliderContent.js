import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />

          <Container>
            <Row>
              <Col lg={8}>
                <div className="slide-text">
                  <div className="slide-text-container">
                    <div className="yollow-text">// Ready For Your Next Riding //</div>
                    <div className="middle-text">Horse Care &<br></br> Training Center.</div>
                    <div className="last-text">Learn how to ride horse like a professopnal.</div>
                    <button className="hero-slider-btn" >All Services
                      <FontAwesomeIcon icon={faArrowRight} className="hero-slider-btn-icon"/>
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="videoPlayer">

                  <ReactPlayer 
                  url='https://youtu.be/NaHVUdM-lnk'
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls={true}
                  />

                </div>
              </Col>
            </Row>
          </Container>



        </div>
      ))}
    </section>
  );
}

export default SliderContent;