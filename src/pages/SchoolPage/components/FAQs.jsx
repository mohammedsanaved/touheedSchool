import React from "react";
import FAQItem from "./FAQs/FAQItem";

const FAQs = () => {
  const items = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for Accordion Item 3",
    },
    {
      title: "Accordion Item 4",
      content: "Content for Accordion Item 4",
    },
    {
      title: "Accordion Item 5",
      content: "Content for Accordion Item 5",
    },
  ];
  return (
    <div>
      <div className="fs-1 fw-bold d-flex justify-content-center mt-4 text-dark">
        FAQs
      </div>
      <div className="accordion mt-3 mb-4">
        {items.map((item, index) => (
          <FAQItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
