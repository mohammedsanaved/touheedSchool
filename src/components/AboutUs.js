import React, { useState } from "react";
import Datas from "../data/about-us/about-us.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import CountUp from "react-countup";
import { Styles } from "./styles/aboutUs.js";
import video from "../assets/schoolVideo.mp4";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion.js";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Styles>
      {/* About Us */}
      <section className="about-us">
        <Container>
          <Row>
            <Col>
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className=""
              >
                <div className="about-image">
                  <div>
                    <video
                      className="h-75 w-100"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      playsInline={true}
                    >
                      <source type="video/mp4" src={video} />
                    </video>
                  </div>
                  {/* <img
                  src={process.env.PUBLIC_URL + "/assets/images/pattern.png"}
                  className="pattern-img"
                  alt=""
                /> */}
                  {/* <div
                  className="video-player"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`,
                  }}
                >
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="uXFUl0KcIkA"
                    onClose={() => setIsOpen(false)}
                  />
                  <button onClick={openModal} className="play-button">
                    <i className="las la-play"></i>
                  </button>
                </div> */}
                </div>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className=""
              >
                <div className="about-content">
                  <h4 className="about-title">{Datas.title}</h4>
                  <p className="about-para">
                    {Datas.desc1}
                    <span>{Datas.desc2}</span>
                  </p>
                  <Link
                    className="readmore-btn"
                    to={process.env.PUBLIC_URL + "/about"}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default AboutUs;
