import styled from "styled-components";

export const EventsStyles = styled.div`
  .event-page-div {
    max-width: 1032px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .filter-event-div {
    column-gap: 50px;
  }

  .event-page-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .pagination-btn {
    background: rgba(4, 156, 80, 1);
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: center;
    color: white;
    padding: 11px 15px;
    border: none;
    border-radius: 6px;
    margin-top: 28px;
  }
`;