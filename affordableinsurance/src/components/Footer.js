import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer_grid'>
        <h5>Affordable Insurance of Texas</h5>
        <p>5133 Kostoryz Road Suite B Corpus</p> <p>Christi, TX 78415</p>
      </div>
      <div className='footer_grid'>
        <h5>Let's Have A Conversation</h5>
        <p>Phone: 361-854-0207</p>
        <p>Fax: 361-854-7073</p>
        <p>Email: affordableinsoftx@yahoo.com</p>
      </div>
      <div className='footer_grid'>
        <h5>Bussiness Hours</h5>
        <p>Monday-Thursday, 8:30 a.m.-5:30 p.m.</p>
        <p>Friday, 8:30 a.m.-5 p.m.</p>
        <p>Saturday & Sunday, Closed</p>
      </div>
      <div className='footer_grid'>
        <h5>Accepted Payment Method:</h5>
        <img
          src='http://www.affordableinsoftx.com/wp-content/uploads/2019/07/aiof-creditcards-1.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Footer;
