import React from "react";
// import styled from "styled-components";
import { Styles } from "./styles/SortByEvents";

const SortByEvents = () => {
  const options = [
    {
      value: "touheed-english-medium-school",
      label: "1) Touheed English Medium School",
    },
    {
      value: "touheed-girls-p.u-college",
      label: "2) Touheed Girls' P.U.College, Ganguli",
    },
    { value: "touheed-womens-college", label: "3) Touheed Womens College " },
    { value: "touheed-public-school", label: "4) Touheed Public School" },
    {
      value: "dina-school-for-special-education-rehabilitation",
      label: "5) 'DINA' - School for Special Education & Rehabilitation",
    },
  ];
  // const Styles = styled.select`
  //   font-size: 1.2rem;
  //   padding: 0.5rem 1rem;
  //   border: 2px solid #00a712;
  //   border-radius: 6px;
  //   background-color: #f6f9ff;
  //   font-weight: 400;
  //   box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
  //   width: 90%;

  //   &:focus {
  //     outline: none;
  //     border-color: #28a745;
  //     box-shadow: 0px 0px 6px rgba(40, 167, 69, 0.5);
  //   }
  // `;
  return (
    // <Styles>
    <Styles name="SchoolSearch" id="schoolsearch">
      {options.map((data) => (
        <option value={data.value}>{data.label}</option>
      ))}
    </Styles>
    // </Styles>
  );
};

export default SortByEvents;
