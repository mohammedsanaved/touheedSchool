import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
  .about-us-section {
    max-width: 1186px;
    column-gap: 30px;
    margin-top: 93px;
    display: flex;
    flex-direction: row; /* Default: row direction */
  }

  .about-title {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    color: black;
    margin-bottom: 20px;
  }

  .about-para {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: justified;
    color: rgba(98, 95, 95, 1);
  }

  .about-content {
    max-width: 493px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .about-us-section {
      max-width: 100%;
      margin-top: 60px;
      padding: 0 20px;
    }

    .about-title {
      font-size: 28px;
      line-height: 36px;
    }

    .about-para {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (max-width: 576px) {
    .about-us-section {
      flex-direction: column; /* Change to column direction on mobile */
    }

    .about-para {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;
