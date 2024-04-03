import styled from "styled-components";

export const SingleEventStyles = styled.div`
  .single-event-div-container {
    margin-top: 100px;
  }

  .event-div-container {
    max-width: 761px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 200px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
    margin-top: 51px;
    margin-left: -35px;
    padding: 25px 35px;
    background-color: white;
    border-radius: 6px;
  }

  .single-event-event-title {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
    color: black;
  }

  .event-div-container .first-col {
    border-right: 1px solid grey;
    padding-right: 25px;
    max-width: 498px;
    width: 100%;
  }

  .event-icons-div {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    margin-top: 11px;
  }

  .event-location-icon {
    margin-left: 15px;
  }

  .single-event-text {
    font-family: Inter;
    font-size: 14px;
    font-weight: 300;
    line-height: 16.94px;
    text-align: left;
    margin-top: 15px;
  }

  .single-event-event-date {
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    text-align: left;
    color: rgba(102, 184, 72, 1);
  }

  .event-div-container .second-col {
    padding-left: 53px;
    align-items: center;
    justify-content: center;
  }

  .event-details-btn {
    background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 6px;
    margin-top: 28px;
  }

  @media screen and (max-width: 900px) {
    .single-event-div-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .single-event-div-container {
      flex-direction: column;
    }

    .event-img {
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 0px;
    }

    .event-div-container {
      flex-direction: column;
      margin: auto;
      height: 100%;
      min-height: 200px;
    }
    .event-div-container .first-col {
      border: none;
      padding-right: 0px;
      margin-bottom: 30px;
    }
    .thumbnail_img {
      max-width: 481px;
    }
    @media screen and (max-width: 1440px) {
      .thumbnail_img {
        max-width: 381px;
      }
    }

    .event-div-container .second-col {
      padding-left: 0px;
    }

    .second-col.d-flex.flex-column {
      flex-direction: row !important;
      align-items: center;
      gap: 20px;
    }
    .event-details-btn {
      margin-top: 0px;
    }
  }
`;
