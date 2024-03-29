import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Styles } from "./styles/Cards";

const CardFlip = () => {
  const [flip, setFlip] = useState(true);
  return (
    <Styles>
      <div className="App" onClick={() => setFlip((prevState) => !prevState)}>
        <motion.div
          style={{ width: "334px", height: "446px" }}
          // style={{ width: "auto", height: "auto" }}
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="Card"
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              className="front"
            >
              <img
                src="https://images.unsplash.com/photo-1584750153892-38414eb8e76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Alt"
                className="image"
              />
            </motion.div>
            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              // style={{ display: flip ? "none" : "block" }}
              transition={{ duration: 0.7 }}
              className="back"
            >
              <span className="Back">
                <span className="schoolLocation">Location</span>
                <div>
                  <div className="fs-2">School Title</div>
                  <div>
                    <p className="fs-5">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-evenly gap-2 mt-3">
                      <button className="ReadMore">Read More</button>
                      <button className="ContactUs">Contacts Us</button>
                    </div>
                  </div>
                </div>
              </span>
            </motion.div>
            {/* <button onMouseEnter={() => setFlip((prevState) => !prevState)}>
            Click me
        </button> */}
          </motion.div>
        </motion.div>
      </div>
    </Styles>
  );
};

export default CardFlip;
