import { styled } from "styled-components";

export const Styles = styled.div`
  .header {
    color: #000;
  }
  .bg {
    background: #f6f9ff;
    height: auto;
    width: 100%;
  }
  button {
    background: #049c50;
    color: #f6f9ff;
    font-size: 16px;
    border: none;
    font-weight: 600;
    transition: background-color 0.3s ease; /* Apply transition on background-color property */
  }

  button:hover {
    background-color: #007a44; /* Change background color on hover */
  }
`;
