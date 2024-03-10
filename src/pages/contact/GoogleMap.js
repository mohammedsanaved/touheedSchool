import React from "react";
import GoogleMapReact from "google-map-react";
import { Styles } from "./styles/contact.js";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 13.052,
      lng: 77.461929,
    },
    zoom: 11,
  };

  return (
    <Styles>
      {/* Google Map */}
      <div className="google-map-area">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCXsCT1nHXV-be1VxGPdEJ1fsb8RbzbJRw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={13.052}
            lng={77.461929}
            text="Touheed Education Trust"
          />
        </GoogleMapReact>
      </div>
    </Styles>
  );
};

export default GoogleMap;
