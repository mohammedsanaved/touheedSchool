import React from 'react';
import "./ContactInfoSection.css";

const ContactInfoSection = () => {


    const locationIconUrl = '/assets/images/location.png';
    const emailIconUrl = '/assets/images/email.png';
    const phoneIconUrl = '/assets/images/phone-call.png';



    return (
        <div className='contact-info-container'>

            <div className='contact-info-container-div d-flex mx-auto'>
                <div className='contact-info-div'>
                    <h2>Contact Info</h2>
                    <hr className='green-hr' />

                    <div className='contact-info-icon-text-div'>
                        <div className='icon-text-div d-flex'>
                            <img src={`${locationIconUrl}`} alt="" />
                            <div className='contact-info-text'><h3>Our Location</h3>
                                <p>Gangolli, Udupi Dist, Karnataka, India 576216.</p>
                            </div>
                        </div>
                        <div className='icon-text-div d-flex'>
                            <img src={`${emailIconUrl}`} alt="" />
                            <div className='contact-info-text'><h3>Email Address</h3>
                                <p>admin@touheed.education info@touheed.education</p>
                            </div>
                        </div>
                        <div className='icon-text-div d-flex'>
                            <img src={`${phoneIconUrl}`} alt="" />
                            <div className='contact-info-text'><h3>Phone Number</h3>
                            <p> +91 (111) 111 1111 <br></br>
                                    +91 (222) 222 2222</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='get-in-touch-div'>
                    <h2>Get In Touch</h2>
                    <hr className='green-hr' />

                </div>


            </div>
        </div>
    )
}

export default ContactInfoSection