import React, { useEffect } from 'react';
import './Contacts.css';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { withRouter } from 'react-router';

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='contacts_body'>
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
      <div className='contacts_container'>
        <div className='contacts_companyInfo'>
          <h4>Contact Us</h4>
          <p>Text will be here shortly after I create everything!</p>
          <div className='icon_text'>
            <PhoneIcon />
            <span>361-447-8569</span>
          </div>
          <div className='icon_text'>
            <MailIcon />
            <span>Jbilly23@gmail.com</span>
          </div>
          <div className='icon_text'>
            <RoomIcon />
            <span>1917 gayle drive, Corpus Christi, Tx 78418</span>
          </div>
          <div className='online_media'>
            <a href='#' className='icon_shape'>
              <FacebookIcon />
            </a>
            <a href='#' className='icon_shape'>
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className='contacts_FormContainer'>
          <form>
            <div className='col2'>
              <div className='form_group'>
                <label>First Name</label>
                <input type='text' />
              </div>
              <div className='form_group'>
                <label>Last Name</label>
                <input type='text' />
              </div>
            </div>
            <div className='col2'>
              <div className='form_group'>
                <label>Email</label>
                <input type='email' />
              </div>
              <div className='form_group'>
                <label>Phone #</label>
                <input type='phone' />
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo'>
                <label>What are you needing help with?</label>
                <div className='radio_buttons'>
                  <div className='radio_button'>
                    <input
                      type='radio'
                      name='type'
                      id='radioQuestion'
                      value='QuickQuest'
                    />
                    <label for='radioQuestion'>Quick Question</label>
                  </div>
                  <div className='radio_button'>
                    <input
                      type='radio'
                      name='type'
                      id='radioQuote'
                      value='GetQuote'
                    />
                    <label for='radioQuote'>Get A Quote</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo'>
                <label>Message</label>
                <textarea placeholder='Write you message here'></textarea>
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo submit'>
                <button className='sendButton'>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Contacts);
