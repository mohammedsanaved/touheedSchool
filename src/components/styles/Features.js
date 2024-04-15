import { styled } from "styled-components";

export const Styles = styled.div`
  .feature_header {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin-bottom: 16px;
    margin-top: 40px;
  }

  .feature_main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .feature_card {
    width: calc(25% - 20px);
    text-align: center;
    margin-bottom: 20px;
  }

  .Featureimg {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 12px;
  }

  .Featuretitle {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    .feature_main {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
    }

    .feature_card {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 576px) {
    .feature_card {
      width: calc(100% - 20px); /* Make cards take full width */
    }
  }
`;
