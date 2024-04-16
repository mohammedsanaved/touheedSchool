import React from 'react';
import { FooterNewStyles } from "./FooterNewStyles.js";
import { Link } from 'react-router-dom';

const FooterNew = () => {


  const logoUrl = '/assets/images/Touheed-logo.png';



  return (
    <FooterNewStyles>
      <div className='footer-div'>
        <div className='footer-div-container d-flex flex-wrap'>
          <div className='logo-column'>
            <img src={`${logoUrl}`} alt="" className='footer-logo' />
            <p className='footer-text'>Touheed Educational Trust (R) is a private charitable and minority educational institution recognized by the Govt. of Karnataka.</p>
            <br />
            <div>Gangolli, udupi dist, karnataka.</div>
            <br />
            <div>info@touheed.education</div>
            <br />
            <div>+91 999 999 9999</div>
            <br />
          </div>
          <div className='quicklinks-column'>
            <div className='footer-subheading'>QUICK LINKS</div>
            <div className='footer-links'><Link>About Us</Link></div>
            <div className='footer-links'><Link>Contact Us</Link></div>
            <div className='footer-links'> <Link>Our Services</Link></div>
            <div className='footer-links'><Link>Privacy Policy</Link></div>
            <div className='footer-links'> <Link>Online Support</Link></div>

          </div>
          <div className='ourschools-column'>
            <div className='footer-subheading'>OUR SCHOOLS</div>
            <div className='footer-links'><Link>Touheed English Medium School</Link></div>
            <div className='footer-links'><Link>Touheed Girl’s College</Link></div>
            <div className='footer-links'> <Link>Touheed Women’s College</Link></div>
            <div className='footer-links'><Link>Touheed Public School</Link></div>
            <div className='footer-links'> <Link>Dina School For Special Education And Rehabilitation</Link></div>

          </div>
        </div>
        <hr className='footer-hr' />
        <div className='footer-below-hr d-flex'>
          <div className='footer-below-hr-text'>Copyright  @ 2024</div>
          <div className='footer-icons'>
          <ul className="social list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={process.env.PUBLIC_URL + "/"}>
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
          </ul>
          </div>
        </div>
      </div>
    </FooterNewStyles>
  )
}

export default FooterNew