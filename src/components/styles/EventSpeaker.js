import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
  .eventDetail_main {
  }
  .card-main-div {
    margin-top: 25px;
    max-width: 250px;
    width: 100%;
  }

  .img-div,
  .speakerImg {
    width: 100%;
  }

  .speakerDetails {
    width: 12%;
    margin: auto;
    border-radius: 4px;
    background: white;
    height: 90px;
    margin-top: -46px;
    position: absolute;
    left: 292px;
    padding: 12px;
    & p {
      align-content: "center";
      font-size: 22px;
      font-weight: 800;
    }
  }
`;
