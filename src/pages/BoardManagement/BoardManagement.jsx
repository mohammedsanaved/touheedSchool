import React from 'react';
import { BoardManagementStyles } from "./BoardManagementStyles.js";
import HeaderTwo from '../../components/HeaderTwo';
import BannerSection from '../../components/BannerSection/BannerSection.jsx';
import FooterNew from '../../components/FooterNew/FooterNew.jsx';
import HeaderNew2 from '../../components/HeaderNew2/HeaderNew2.jsx';

const BoardManagement = () => {


  const bg = "./assets/images/eventspageimage.png";

  return (
   
      <BoardManagementStyles>
      
      
      <HeaderNew2/>

      <BannerSection bg_image={bg} />

      <h1 className='page-title'>Board Of Management</h1>


<div className='board-container d-flex mx-auto flex-wrap'>
  <div className='board-member-div'>
    <img src="./assets/images/management/Akhther-Ahmed-Khan--Administrator.jpg" alt="" className='member-img' />
    
    <h3 className='member-name'>Abdul Hameed</h3>
    <h5 className='member-title'>Treasurer Business</h5>

  </div>
  <div className='board-member-div'>
    <img src="./assets/images/management/Akhther-Ahmed-Khan--Administrator.jpg" alt="" className='member-img' />
    
    <h3 className='member-name'>Abdul Hameed</h3>
    <h5 className='member-title'>Treasurer Business</h5>

  </div>
  <div className='board-member-div'>
    <img src="./assets/images/management/Akhther-Ahmed-Khan--Administrator.jpg" alt="" className='member-img' />
    
    <h3 className='member-name'>Abdul Hameed</h3>
    <h5 className='member-title'>Treasurer Business</h5>

  </div>
  <div className='board-member-div'>
    <img src="./assets/images/management/Akhther-Ahmed-Khan--Administrator.jpg" alt="" className='member-img' />
    
    <h3 className='member-name'>Abdul Hameed</h3>
    <h5 className='member-title'>Treasurer Business</h5>

  </div>
  <div className='board-member-div'>
    <img src="./assets/images/management/Akhther-Ahmed-Khan--Administrator.jpg" alt="" className='member-img' />
    
    <h3 className='member-name'>Abdul Hameed</h3>
    <h5 className='member-title'>Treasurer Business</h5>

  </div>

</div>

<FooterNew/>

      </BoardManagementStyles>
  )
}

export default BoardManagement;