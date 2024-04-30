import React from 'react';
import { SchoolAboutUsStyle } from "./SchoolAboutUsStyle";
import AboutUsTwo from '../../components/AboutUsTwo';
import HeaderTwo from '../../components/HeaderTwo';
import BannerSection from '../../components/BannerSection/BannerSection';
import TabBox from '../../components/TabBox.js';

const SchoolAboutUs = () => {

    const bg = "./assets/images/eventspageimage.png";



  return (
    <SchoolAboutUsStyle>
    <HeaderTwo/>
    <BannerSection bg_image={bg} title={"Home/Events"} />
    <div className="breadcrumbs-div mx-auto">
            <p>
              <span className="color-purple"> Touheed</span>/ Touheed English
              medium School
            </p>
          </div>
    <AboutUsTwo/>
    <TabBox />
    </SchoolAboutUsStyle>
  )
}

export default SchoolAboutUs