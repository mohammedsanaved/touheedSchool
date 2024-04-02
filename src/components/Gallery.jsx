import React from "react";
import { Styles } from "./styles/Gallery";

const Gallery = () => {
  return (
    <Styles>
      <div className="galleryHeader">
        We Have Best Campus In The Region. Let's Explore The Campus.
      </div>
      <div className="gallery_main">
        <div className="d-flex flex-column">
          <div>
            <img
              src={
                "https://images.pexels.com/photos/20578401/pexels-photo-20578401/free-photo-of-a-yellow-building-with-windows-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              className="oneofOne"
              alt=""
            />
          </div>
          <div className="oneofOne01">
            <div>
              <img
                src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="oneofOne1"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1584750153892-38414eb8e76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="oneofOne2"
              />
            </div>
          </div>
        </div>
        <div className="oneofTwo gap-3">
          <img
            src="https://images.pexels.com/photos/16293663/pexels-photo-16293663/free-photo-of-easter-decor-with-eggs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className=""
          />
        </div>
        <div className="gap-3">
          <div>
            <img
              src="https://images.pexels.com/photos/15625357/pexels-photo-15625357/free-photo-of-white-flower-against-purple-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="oneofThree1"
              alt=""
            />
          </div>
          <div className="mt-2">
            <img
              src="https://images.pexels.com/photos/4200287/pexels-photo-4200287.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="oneofThree2"
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Gallery;
