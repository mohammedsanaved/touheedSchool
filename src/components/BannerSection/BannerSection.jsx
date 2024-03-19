import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  const staticImageUrl = "../assets/images/SchoolBgImage.png";

  return (
    <>
      <div
        className="school-banner-section"
        style={{
          backgroundImage: `url(${staticImageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="school-name">Touheed English Medium School</div>
      </div>
    </>
  );
};

export default BannerSection;
