import React, { useState } from "react";

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item mb-4 border border-2 rounded-3">
      <div
        className="accordion-title d-flex justify-content-around p-2"
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <span className="fs-2">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content bg-light px-4 py-3">{content}</div>
      )}
    </div>
  );
};

export default FAQItem;
