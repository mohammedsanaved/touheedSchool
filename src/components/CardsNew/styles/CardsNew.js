import styled from "styled-components";
export const CardsNewStyles = styled.div`
  .cards-container {
    position: relative;
    border-radius: 15px;
    overflow: auto;
    border: 1px solid black;

    width: 348px;
  }

  .ReadMore {
    background: #11b67a;
    padding: 7px 15px;
    border: none;
    border-radius: 10px;
    color: #eee;
    font-weight: 600;
    font-size: 20px;
  }
  .ContactUs {
    padding: 5px 15px;
    border: 2px solid #11b67a;
    background: none;
    border-radius: 10px;
    color: #11b67a;
    font-weight: 600;
    font-size: 20px;
  }

  .cards-location {
    position: absolute;
    padding: 5px 20px 10px 20px;
    font-size: 22px;
    background: #11b67a;

    margin: auto;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: 0;
    width: fit-content;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .cards-img {
    width: 100%;
    height: 200px;
    background-size: cover;

    margin-bottom: 10px;
  }
  .cards-schoolName {
    font-family: Inter;
    font-size: 28px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 10px;
  }
  .cards-schooldescription {
    font-family: Inter;
    font-size: 20px;
    font-weight: 200;
    line-height: 20px;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    max-width: 290px;
    margin: auto;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
  }
  .cards-button {
    margin-bottom: 20px;
  }
`;
