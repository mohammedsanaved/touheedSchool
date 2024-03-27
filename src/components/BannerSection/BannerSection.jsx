import React from 'react';

import {BannerSectionStyles} from "./BannerSectionStyles.js"

const BannerSection =  (props)  => {

  const { title, bg_image } = props.data;

    



  return (
    <>
    <BannerSectionStyles>
    <div className='school-banner-section' style={{backgroundImage: `url(${bg_image})`, backgroundSize: 'cover',}}>

    <div className='school-name'>{title}</div>

    </div>
    </BannerSectionStyles>
    </>
  );
};

export default BannerSection;
