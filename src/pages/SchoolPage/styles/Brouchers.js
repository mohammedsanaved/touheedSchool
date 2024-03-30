import { styled } from "styled-components";

export const Styles = styled.div`
  
  .brochure-bg {
    background: #f6f9ff;
    height: auto;
    width: 100%;
    padding:80px;
    max-width:1207px;
    width:100%;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
  }

  .brochure-img{
    margin-bottom:80px;
  }
  
 
.brochure-header{
  font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
text-align: center;
color:black;
margin-bottom:77px;
margin-top:80px;
}

.brochure-text{
  font-family: Inter;
font-size: 24px;
font-weight: 500;
line-height: 29.05px;
text-align: center;

max-width:  892px;
width:100%;

margin-bottom:50px;
color:rgba(58, 58, 58, 1);
}

@media screen and (max-width: 600px) {

.brochure-text{
  font-size: 16px;
  line-height: 23.05px;
}

.brochure-bg{
  padding-left:15px;
  padding-right:15px;
}
.brochure-header{
  font-size:25px;
}

.brochure-bg{
  padding-top:40px;
}


.brochure-img{
  margin-bottom:20px;
}

.know-more-btn , .enquire-now-btn{
  font-size: 18px !important;
  width: auto !important;
}


}


`;
