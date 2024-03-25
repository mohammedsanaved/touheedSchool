import React from 'react';
import { SingleEventStyles } from "./SingleEventStyles.js";

const SingleEvent = () => {
    return (
        <SingleEventStyles>
        <div className='d-flex single-event-div-container justify-content-center'>
            <img src="../assets/images/SingleEventPlaceholder.png" alt="" />
            <div className='event-div-container d-flex'>
                <div className='first-col'>
                    <h2 className='single-event-event-title'>A session on Career Guidance.</h2>
                    <div className='d-flex event-icons-div align-items-center'>
                        <img src="./assets/images/ion_time-outline.png" alt="" />
                        &nbsp; 7:30
                        <img src="./assets/images/carbon_location.png" alt="" className='event-location-icon' />
                         Gangolli - Karnataka
                    </div>
                    <p className='single-event-text'>An exclusive session on Career Guidance, focusing on creating awareness and expand horizons for the students.</p>
                </div>
                
                <div className='second-col d-flex flex-column'>
                    <h2 className='single-event-event-date'>20 Jan</h2>
                    <button className='event-details-btn'>DETAILS</button>
                </div>
            </div>
        </div>
    </SingleEventStyles>
    )
}

export default SingleEvent