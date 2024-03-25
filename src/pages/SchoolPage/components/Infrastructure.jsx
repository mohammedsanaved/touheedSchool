import React from "react";

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
      src: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Library",
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
      src: "https://images.pexels.com/photos/8617514/pexels-photo-8617514.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "School Canteen",
    },
  ];

  return (
    <div className="mt-4">
      <div className="fs-1 fw-bold text-center mb-5">Infrastructure</div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {dataStructure.map((item, index) => (
          <div key={index} className="col">
            <div className="h-100">
              <img
                src={item.src}
                className="card-img-top rounded-3 shadow-lg"
                alt={item.title}
              />
              <div className="">
                <h5 className="mt-3 d-flex justify-content-center">
                  {item.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
