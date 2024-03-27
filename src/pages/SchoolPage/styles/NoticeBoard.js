import { styled } from "styled-components";

export const Styles = styled.div`
  .background {
    background: #f6f9ff;
    height: auto;
    width: auto;
    padding: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom: 20px;
    border-radius: 12px;
  }
  .inner_background {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
    flex-direction: column;
    padding: 130px 25px 0 25px;
    height: 250px;
    width: 50vw;
    margin: auto;
    background: #fff;
    gap: 10px;
    overflow-y: scroll;
    border-radius: 20px;
    font-size: 16px;

    /* Custom scrollbar */
    scrollbar-width: auto;
    scrollbar-color: #11b67a transparent;
    overflow-y: auto;
  }

  .inner_background::-webkit-scrollbar {
    width: 50px; /* Width of the scrollbar */
    border-radius: 20px;
  }

  .inner_background::-webkit-scrollbar-track {
    background: transparent; /* Track color */
    border-radius: 40px; /* Rounded border */
  }

  .inner_background::-webkit-scrollbar-thumb {
    background-color: #11b67a; /* Color of the scrollbar */
    border-radius: 10px; /* Rounded border */
  }

  .PinIcon {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 50px;
    color: #11b67a;
  }
  .noticeContent {
    display: flex;
    gap: 15px;
  }
`;
