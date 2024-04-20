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

display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5;
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

.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
}


.banner-container{
  position:relative;
}


.banner-text-container{
  z-index:0;
}



.banner-custom-prev,
.banner-custom-next {
  width: 35px;
  height: 35px;
  background-image:url("/assets/images/right-arrow.png");
  background-size: contain;
  cursor:pointer;
  position:absolute;
  top:45%;
  background-color:white;
  border:5px solid white;
  border-radius:50%;
  z-index: 1;
  opacity:0.3;
}


.banner-custom-prev{
  transform: scaleX(-1);
  left:10px;
}

.banner-custom-next {
  right:10px;
}



`;
