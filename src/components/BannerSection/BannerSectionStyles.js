import styled from "styled-components";

export const BannerSectionStyles = styled.div`
  .school-banner-section {
    min-height: 330px;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 30px;
  }

  .school-name {
    font-family: Playfair Display;
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
    max-width: 667px;
    width: 100%;
    margin-top: 64px;
    margin-left: 67px;
  }

  @media (max-width: 1200px) {
    .school-name {
      font-size: 30px;
      margin: auto;
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
    }
    .school-banner-section {
      min-height: 210px;
      height: 100%;
      display: flex;
      padding-top: 0;
    }
  }
`;
