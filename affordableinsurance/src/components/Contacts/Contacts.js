import React, { useState, useEffect } from 'react';
import './Contacts.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Phone, Mail, Room, Facebook, LocalParking } from '@material-ui/icons';

import { withRouter } from 'react-router';

function Contacts() {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNum, setPhoneNum] = useState('');
  const [message, setMessage] = useState('');
  const [QuickQuest, setQuickQuest] = useState(true);
  const [GetQuote, setGetQuote] = useState(false);

  const services = [
    { service: 'Auto/Trucks' },
    { service: 'Bonds' },
    { service: 'Windstorm' },
    { service: 'Builders Risk' },
    { service: 'Motorcycle' },
    { service: 'Recreational Vehicles' },
    { service: 'Mobile Homes' },
    { service: 'Boats' },
    { service: 'Flood' },
    { service: 'Workers’ Comp' },
    { service: 'Commercial Property' },
    { service: 'Commercial Liability' },
    { service: 'Renter’s policies' },
    { service: 'Liquor Liability' },
    { service: 'Mexico Insurance' },
    { service: 'SR22s' },
  ];

  const budgets = [
    { budget: '$500' },
    { budget: '$1,000' },
    { budget: '$2,500' },
    { budget: '$5,000' },
    { budget: '$7,500' },
    { budget: '$10,000' },
    { budget: '$50,000' },
    { budget: '$100,000' },
    { budget: '$1,000,000' },
  ];

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
          and helpful staff is ready to assist you with your inquiries.
        </p>
      </div>
      <div className='contacts_container'>
        <div className='contacts_companyInfo'>
          <h4>Contact Us</h4>
          <p>
            We are happy to answer any questions you might have regarding
            insurance you are looking for. Please fill out the form and we'll be
            in touch as soon as possible.
          </p>
          <div className='icon_text'>
            <Phone />
            <span>361-854-0207</span>
          </div>
          <div className='icon_text'>
            <Mail />
            <span>affordableinsoftx@yahoo.com</span>
          </div>
          <div className='icon_text'>
            <Room />
            <span>5133 Kostoryz Rd Suite B, Corpus Christi, TX 78415</span>
          </div>
          <div className='online_media'>
            <a
              href='https://www.facebook.com/Affordableinsoftexas'
              target='_blank'
              className='icon_shape'
            >
              <Facebook />
            </a>
            <a
              href='https://www.progressive.com/agent/local-agent/texas/corpus-christi/affordable-insurance-of-texas-78415/'
              target='_blank'
              className='icon_shape'
            >
              <LocalParking />
            </a>
          </div>
        </div>
        <div className='contacts_FormContainer'>
          <form>
            <div className='col2'>
              <div className='form_group'>
                <label>First Name</label>
                <input
                  type='text'
                  value={Fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className='form_group'>
                <label>Last Name</label>
                <input
                  type='text'
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
            <div className='col2'>
              <div className='form_group'>
                <label>Email</label>
                <input
                  type='email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form_group'>
                <label>Phone #</label>
                <input
                  type='phone'
                  value={PhoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
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
                      value={QuickQuest}
                      checked={QuickQuest}
                      onChange={(e) => setQuickQuest(true) & setGetQuote(false)}
                    />
                    <label for='radioQuestion'>Quick Question</label>
                  </div>
                  <div className='radio_button'>
                    <input
                      type='radio'
                      name='type'
                      id='radioQuote'
                      value={GetQuote}
                      checked={GetQuote}
                      onChange={(e) => setGetQuote(true) & setQuickQuest(false)}
                    />
                    <label for='radioQuote'>Get A Quote</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='col2'>
              <div className='form_group'>
                <div className='combo_container'>
                  {GetQuote ? (
                    <Autocomplete
                      className='combo-box'
                      options={services}
                      getOptionLabel={(option) => option.service}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Services'
                          variant='outlined'
                        />
                      )}
                    />
                  ) : null}
                  {GetQuote ? (
                    <Autocomplete
                      className='combo-box'
                      options={budgets}
                      getOptionLabel={(option) => option.budget}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label='Budget'
                          variant='outlined'
                        />
                      )}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo'>
                <label>Message</label>
                <textarea
                  placeholder='Write you message here'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
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
