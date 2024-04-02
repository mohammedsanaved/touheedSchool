import { styled } from "styled-components";

export const Styles = styled.div`
  .feature_header {
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin-bottom: 16px;
    margin-top: 40px;
  }
  .feature_main {
    display: flex;

    justify-content: space-around; /* Adjust as needed */
  }

  .feature_card {
    width: 18%; /* Adjust as needed */
    text-align: center;
    margin-bottom: 20px;
  }

  .Featureimg {
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 12px;
  }

  .Featuretitle {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }
`;
