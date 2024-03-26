import React from "react";
import { Styles } from "../styles/Brouchers";
import { MdLibraryBooks } from "react-icons/md";

const Brouchers = () => {
  return (
    <Styles>
      <div className="mt-4">
        <div className="fs-1 fw-bold text-center mb-5 header">
          Go through our Brochures
        </div>
        <div className="bg p-5 d-flex flex-column justify-content-center align-content-center gap-4 rounded-4">
          <div className="mx-auto">
            <MdLibraryBooks className="fs-1" />
          </div>
          <div className="lh-base fs-4 align-items-center align-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque
            corporis amet. Quae quasi laborum atque officiis beatae expedita
            ipsam, dicta necessitatibus? Culpa perspiciatis corrupti vitae,
            adipisci quasi quae amet reprehenderit reiciendis minus sequi id
            doloremque! Molestiae quas maxime voluptatibus.
          </div>
          <div className="d-flex justify-content-center mt-3 gap-4">
            <button className="px-5 py-3 rounded-3">Enquiry</button>
            <button className="px-5 py-3 rounded-3">ReadMore</button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Brouchers;
