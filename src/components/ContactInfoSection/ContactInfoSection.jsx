import React, { useEffect } from "react";
import { ContactInfoSectionStyles } from "./ContactInfoSectionStyles.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { schoolList } from "../../actions/schoolActions.js";
import { createContact } from "../../actions/contactActions.js";

const ContactInfoSection = () => {
  const locationIconUrl = "/assets/images/location.png";
  const emailIconUrl = "/assets/images/email.png";
  const phoneIconUrl = "/assets/images/phone-call.png";

  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    class_grade: "",
    message: "",
    mobileNumber: "",
    // school_email: "",
  });
  console.log(formData, "FormData");
  const dispatch = useDispatch();
  const schoolEmails = useSelector((state) => state.schoolList);
  const { schools } = schoolEmails;
  useEffect(() => {
    dispatch(schoolList());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to create contact
    dispatch(
      createContact(
        formData.name,
        formData.school_id,
        formData.mobileNumber,
        formData.message,
        formData.user_email,
        formData.class_grade
      )
    );
  };

  return (
    <ContactInfoSectionStyles>
      <div className="contact-info-container">
        <div className="contact-info-container-div d-flex mx-auto">
          <div className="contact-info-div">
            <h2>Contact Info</h2>
            <hr className="green-hr" />

            <div className="contact-info-icon-text-div">
              <div className="icon-text-div d-flex">
                <img src={`${locationIconUrl}`} alt="" />
                <div className="contact-info-text">
                  <h3>Our Location</h3>
                  <p>Gangolli, Udupi Dist, Karnataka, India 576216.</p>
                </div>
              </div>
              <div className="icon-text-div d-flex">
                <img src={`${emailIconUrl}`} alt="" />
                <div className="contact-info-text">
                  <h3>Email Address</h3>
                  <p>
                    admin@touheed.education
                    <br />
                    info@touheed.education
                  </p>
                </div>
              </div>
              <div className="icon-text-div d-flex">
                <img src={`${phoneIconUrl}`} alt="" />
                <div className="contact-info-text">
                  <h3>Phone Number</h3>
                  <p>
                    {" "}
                    +91 (111) 111 1111 <br></br>
                    +91 (222) 222 2222
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-div">
            <h2>Get In Touch</h2>
            <hr className="green-hr" />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Parent's name :"
                  className="get-in-touch-form-input"
                />
              </div>
              <div className="form-email-subject d-flex">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="get-in-touch-form-input"
                />

                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Mobile Number :"
                  className="get-in-touch-form-input"
                />
              </div>

              <div className="form-email-subject d-flex">
                <input
                  type="text"
                  name="class_grade"
                  value={formData.classGrade}
                  onChange={handleInputChange}
                  placeholder="Class/Grade :"
                  className="get-in-touch-form-input"
                />

                <select
                  name="school_id"
                  value={formData.school_id}
                  onChange={handleInputChange}
                  className="get-in-touch-form-input"
                >
                  <option value="">Select School</option>
                  {schools?.rows?.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="get-in-touch-form-input message-area"
                />
              </div>
              <button type="submit" className="form-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </ContactInfoSectionStyles>
  );
};

export default ContactInfoSection;
