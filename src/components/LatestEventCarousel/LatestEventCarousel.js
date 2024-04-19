import { styled } from "styled-components";

export const LatestEventsStyle = styled.div`
  .latest-events-title {
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.57px;
    text-align: center;
    color: black;
    margin-bottom: 18px;
  }

  .latest-event-img {
    width: 463px;
    height: 463px;
  }

  .event-carousel-container {
    display: flex;
    max-width: 1128px;
    column-gap: 50px;
  }
  @media only screen and (max-width: 768px) {
    .event-carousel-container {
      flex-direction: column;
    }
  }

  .event-title {
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: black;
    margin-bottom: 20px;
  }

  .event-text {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.2px;
    text-align: left;
    color: rgba(141, 138, 138, 1);
  }

  .event-text-sec {
    max-width: 463px;
  }


  .latest-event-custom-prev,
  .latest-event-custom-next {
    width: 35px;
    height: 35px;
    background-image:url("/assets/images/right-arrow.png");
    background-size: contain;
    cursor:pointer;
    position:absolute;
    top:50%;
    background-color:white;
    border:5px solid white;
    border-radius:50%;
  }
  
  .latest-event-custom-prev {
    transform: scaleX(-1);
  }
  .latest-event-custom-prev{
    left:50px;
  }
  
  .latest-event-custom-next {
    right:50px;
  }

  .latest-event-container{
    position:relative;
  }

`;
