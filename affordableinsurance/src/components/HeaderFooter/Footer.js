import React from 'react';
import { useHistory } from 'react-router';
import './Footer.css';
import pic from './creditcardimg/aiof-creditcards.png';

function Footer() {
  const history = useHistory();
  return (
    <div className='footer_container'>
      <div
        onClick={() =>
          window.open(
            'https://www.google.com/maps/place/Affordable+Insurance+of+Texas/@27.7275529,-97.4145199,19z/data=!4m5!3m4!1s0x86685f8a8bd0067b:0xb1c297acff209a6e!8m2!3d27.7275257!4d-97.414088',
            '_blank'
          )
        }
        className='footer_grid'
      >
        <h5>Affordable Insurance of Texas</h5>
        <p>5133 Kostoryz Road Suite B,</p>
        <p>Corpus Christi, TX 78415</p>
      </div>
      <div onClick={() => history.push('/contacts')} className='footer_grid'>
        <h5>Let's Have A Conversation</h5>
        <p>Phone: 361-854-0207</p>
        <p>Fax: 361-854-7073</p>
        <p>Email: affordableinsoftx@yahoo.com</p>
      </div>
      <div onClick={() => history.push('/contacts')} className='footer_grid'>
        <h5>Bussiness Hours</h5>
        <p>Monday-Thursday, 8:30 a.m.-5:30 p.m.</p>
        <p>Friday, 8:30 a.m.-5 p.m.</p>
        <p>Saturday & Sunday, Closed</p>
      </div>
      <div className='footer_grid'>
        <h5>Accepted Payment Method:</h5>

        <img
          src = {pic}
          alt='pic'
        />



        <h4 onClick={() => history.push('/admin')}>Admin Login</h4>
        <p>
          Copyright, Affordable Insurance of Texas, {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
