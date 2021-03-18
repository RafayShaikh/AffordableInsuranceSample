import React, { useEffect } from 'react';
import './Contacts.css';
import { withRouter } from 'react-router';

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contacts_container'>
      <div className='contacts_description'>
        <h1>Contacts Start</h1>
        <p>
          Thank you for visiting our website. For all your insurance needs for
          vehicle, home and office, come to Affordable Insurance of Texas. We
          have years of experience finding the best rates on the best coverage
          around! To learn more about any of our programs or about the several
          companies that we represent, please give us a call today! Our friendly
          and helpful staff is ready to assist you with your inquiries. (From
          Original Site)
        </p>
      </div>
      <div className='contacts_infoForm'>
        <h2>We would like to hear from you. Please fill out form below</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
      <div className='contacts_infoForm'>
        <h2>PLACE HOLDER</h2>
      </div>
    </div>
  );
}

export default withRouter(Contacts);
