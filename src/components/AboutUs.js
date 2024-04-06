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
import GreenButton from "./GreenButton/GreenButton.jsx";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Styles>
      {/* About Us */}
      <section className="about-us-section d-flex mx-auto">
       

             
                <div className="about-video">
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
                 
                </div>
             
           

           
             
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
                    
                    <GreenButton text="Read More" />
                  </Link>
                </div>
             
         
       
      </section>
    </Styles>
  );
};

export default AboutUs;
