import React from 'react';
import BannerSection from "../../components/BannerSection/BannerSection"
import SingleEvent from '../../components/SingleEvent/SingleEvent';
import {EventsStyles} from "./EventsStyles.js"


const Events = () => {


    const data = {
        title: 'Home/Event',
        
        bg_image:'../assets/images/HomeEvent.png',
      };


      



  return (
    <>

    <EventsStyles>
    <BannerSection data={data} />

    <div className='event-page-div mx-auto'>

    
    <SingleEvent/>
    <SingleEvent/>

    <SingleEvent/>

    <SingleEvent/>
    </div>

    
    </EventsStyles>
    </>
  )
}

export default Events