import React from 'react';
import { SchoolAboutUsStyle } from "./SchoolAboutUsStyle";
import AboutUsTwo from '../../components/AboutUsTwo';
import HeaderTwo from '../../components/HeaderTwo';
import BannerSection from '../../components/BannerSection/BannerSection';
import TabBox from '../../components/TabBox.js';
import AdditionalTabs from '../../components/AdditionalTabs/AdditionalTabs.jsx';
import Infrastructure from '../SchoolPage/components/Infrastructure.jsx';
import FooterNew from "../../components/FooterNew/FooterNew.jsx";

const SchoolAboutUs = () => {

    const bg = "./assets/images/eventspageimage.png";

    


  return (
    <SchoolAboutUsStyle>
      <HeaderTwo />
      <BannerSection bg_image={bg} title={"Home/Events"} />
      <div className="breadcrumbs-div mx-auto">
        <p>
          <span className="color-purple"> Touheed</span>/ Touheed English medium
          School
        </p>
      </div>
      <AboutUsTwo />
      <TabBox />
      <AdditionalTabs />
      <Infrastructure />
      <FooterNew />
    </SchoolAboutUsStyle>
  );
}

export default SchoolAboutUs