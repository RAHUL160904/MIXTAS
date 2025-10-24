import React from 'react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
     <div className='footer'>
      <div className="footer-intro">
        <h2>Mixtas</h2>
        <p>
          Whether you're a trendsetter, a minimalist, or an adventure at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.
        </p>
        <i className="fa-brands fa-facebook" id='icon'></i>
        <i className="fa-brands fa-x-twitter" id='icon'></i>
        <i className="fa-brands fa-instagram" id='icon'></i>
        <i className="fa-brands fa-pinterest" id='icon'></i>
      </div>

      <div className="footer-section">
        <h2>About Us</h2>
        <h4 onClick={() => navigate('')}>Our Story</h4>
        <h4 onClick={() => navigate('')}>Mission & Values</h4>
        <h4 onClick={() => navigate('')}>Meet the Team</h4>
        <h4 onClick={() => navigate('')}>Sustainability Efforts</h4>
        <h4 onClick={() => navigate('')}>Brand Partnerships</h4>
        <h4 onClick={() => navigate('')}>Influencer Collaborations</h4>
      </div>

      <div className="footer-section">
        <h2>Accessibility</h2>
        <h4 onClick={() => navigate('')}>Accessibility Statement</h4>
        <h4 onClick={() => navigate('')}>Site Map</h4>
        <h4 onClick={() => navigate('')}>Web Accessibility Option</h4>
        <h4 onClick={() => navigate('')}>ADA Compliance</h4>
        <h4 onClick={() => navigate('')}>Privacy Policy</h4>
        <h4 onClick={() => navigate('')}>Terms of Service</h4>
      </div>

      <div className="footer-section">
        <h2>Join Our Community</h2>
        <h4 onClick={() => navigate('')}>VIP Membership</h4>
        <h4 onClick={() => navigate('')}>Loyalty Program</h4>
        <h4 onClick={() => navigate('')}>Customer Reviews</h4>
        <h4 onClick={() => navigate('')}>Style Forums</h4>
        <h4 onClick={() => navigate('')}>Job Openings</h4>
        <h4 onClick={() => navigate('')}>Culture and Values</h4>
      </div>

      <div className="footer-newsletter">
        <h2>Let's Get in Touch</h2>
        <p>Sign up for our newsletter and receive 10% off your first purchase.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your E-mail address" />
        </div>
        <hr />
      </div>
       <hr />
      </div>
       <div className='copy'>
        <h6>&copy;  2024 Mixtas All rights reserved. Developed By Apsara Rose Delina</h6>
        
      </div>
    </>
  );
};

export default Footer;


// export default Footer;
