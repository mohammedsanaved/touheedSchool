import { styled } from "styled-components";

export const HeroSlideStyle = styled.div`

span.swiper-pagination-bullet{
  width: 50px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid white;
}
span.swiper-pagination-bullet.swiper-pagination-bullet-active{
  border:none;
}

.img-title{
  font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.2px;
text-align: center;
color:white;
margin-bottom:20px;
}

.img-text{
  font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: center;
color:white;
max-width:410px;
margin-bottom:40px;
}

  .image-container {
    width: 100%;
  
    height: 670px;
    background-size:cover;

    

  }

   
  img {
    height: 700px;
    width: 100vw;
    transform: scale(1);
  }





`;
