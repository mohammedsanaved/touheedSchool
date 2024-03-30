import React from "react";
import { Styles } from "../styles/Brouchers";
import GreenButton from "../../../components/GreenButton/GreenButton";



const Brouchers = () => {

  const brochurelogo = '/assets/images/BrochureLogo.png';




  return (
    <Styles>
      <div className="mt-4">
        <div className="text-center mb-5 brochure-header">
          Go through our Brochures
        </div>
        <div className="brochure-bg rounded-4  mx-auto">
          <div className="mx-auto d-flex justify-center">
           <img src={`${brochurelogo}`} alt="" className="mx-auto brochure-img" />
          </div>
          <div className="brochure-text align-items-center align-content-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque
            corporis amet. Quae quasi laborum atque officiis beatae expedita
            ipsam, dicta necessitatibus? Culpa perspiciatis corrupti vitae,
            adipisci quasi quae amet reprehenderit reiciendis minus sequi id
            doloremque! Molestiae quas maxime voluptatibus.
          </div>
          <div className="school-buttons d-flex justify-content-center mx-auto">
            <GreenButton  text="Know More" class_Name="know-more-btn" />
            <GreenButton  text="Enquire Now" class_Name="enquire-now-btn" />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Brouchers;
