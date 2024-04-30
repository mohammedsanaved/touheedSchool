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


  .event-page-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
}
div#schoolsearch{
  padding-left:0px;
  padding-right:0px;
}

div#schoolsearch select{
  padding:10px;
  padding-right:50px;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("/assets/images/down-arrow.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
  width:100%;
 
}

.select-school-text{
  display: flex;
  align-items: center;
  max-width:210px;
  font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
color:black;
}

@media only screen and (max-width: 600px){
.select-div{
  flex-direction:column;
}
}

`;