import React from "react";
import { Styles } from "../styles/Infrastructure";

const Infrastructure = () => {
  const dataStructure = [
    {
      src: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Library",
    },
    {
      src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Classroom",
    },
    {
      src: "https://images.pexels.com/photos/7942489/pexels-photo-7942489.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Assembly",
    },
    {
      src: "https://images.pexels.com/photos/908970/pexels-photo-908970.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Playground",
    },
    {
      src: "https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Science Lab",
    },
    {
      src: "https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "School Canteen",
    },
  ];

  return (
    <Styles>
      <div className="infrastructure-div mx-auto">
        <div className="infrastucture-title">
          Infrastructure
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {dataStructure.map((item, index) => (
            <div key={index} className="col">
              <div>
                <img
                  src={item.src}
                  className="card-img-top rounded-3 shadow-lg img"
                  alt={item.title}
                />
                <div>
                  <h5 className="mt-4 mb-5 text-center img-text">
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default Infrastructure;
