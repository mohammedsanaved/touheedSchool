import React from 'react';
import { ContactInfoSectionStyles } from "./ContactInfoSectionStyles.js";
import { useState } from 'react';

const ContactInfoSection = () => {


    const locationIconUrl = '/assets/images/location.png';
    const emailIconUrl = '/assets/images/email.png';
    const phoneIconUrl = '/assets/images/phone-call.png';



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // You can send the form data to an API or perform any other action
    };


    return (

        <ContactInfoSectionStyles>

   


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
                                <p>admin@touheed.education
                                    <br />info@touheed.education</p>
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
                    <form onSubmit={handleSubmit}>
                        <div>

                            <input
                                type="text"
                                name="full_name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder='FullName'
                                className='get-in-touch-form-input'
                            />
                        </div>
                        <div className='form-email-subject d-flex'>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Email Address'
                                className='get-in-touch-form-input'
                            />

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder='Subject'
                                className='get-in-touch-form-input'
                            />


                        </div>
                        <div>
                            <textarea
                                name="messsage"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder='Message'
                                className='get-in-touch-form-input message-area' />
                        </div>
                        <button type="submit" className='form-btn'>SEND MESSAGE</button>
                    </form>
                </div>


            </div>
        </div>
        
        </ContactInfoSectionStyles>
        
    )
}

export default ContactInfoSection;