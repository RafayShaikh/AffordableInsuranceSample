import React, { useState, useRef, useEffect } from 'react';
import './Contacts.css';
import validate from '../../features/validateInfo';
import useForm from '../../features/useForm';

import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

import Recaptcha from 'react-google-recaptcha';

import { Phone, Mail, Room, Facebook, LocalParking } from '@material-ui/icons';

import { withRouter } from 'react-router';

function Contacts() {
  const { handleChange, values } = useForm(submitForm, validate);
  const [submitted, setSubmitted] = useState(false);
  function submitForm() {
    setSubmitted(true);
  }
  const [errors, setErrors] = useState({});
  const [checker, setChecker] = useState(false);
  const [QuickQuest, setQuickQuest] = useState(true);
  const [GetQuote, setGetQuote] = useState(false);

  const services = [
    'Auto/Trucks',
    'Bonds',
    'Windstorm',
    'Builders Risk',
    'Motorcycle',
    'Recreational Vehicles',
    'Mobile Homes',
    'Boats',
    'Flood',
    'Workers’ Comp',
    'Commercial Property',
    'Commercial Liability',
    'Renter’s policies',
    'Liquor Liability',
    'Mexico Insurance',
    'SR22s',
  ];
  const budgets = [
    '$500',
    '$1,000',
    '$2,500',
    '$5,000',
    '$7,500',
    '$10,000',
    '$50,000',
    '$100,000',
    '$1,000,000',
  ];

  const reRef = useRef();
  const sendForm = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setChecker(true);

    if (Object.keys(validate(values)).length == 6 && QuickQuest) {
      //alert('Success!!');
      Recaptcha.execute();
    } else if (Object.keys(validate(values)).length == 5 && GetQuote) {
      //alert('Success!!');
      Recaptcha.execute();
    }
    /*  Need to be like this
    if ( '' == this.state.value ) {
      alert( 'Validation failed! Input cannot be empty.' );
      this.recaptcha.reset();
    } else {
      this.recaptcha.execute();
    }
    */
  };

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
          {Object.keys(validate(values)).length}
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
              rel='noreferrer'
              className='icon_shape'
            >
              <Facebook />
            </a>
            <a
              href='https://www.progressive.com/agent/local-agent/texas/corpus-christi/affordable-insurance-of-texas-78415/'
              target='_blank'
              rel='noreferrer'
              className='icon_shape'
            >
              <LocalParking />
            </a>
          </div>
        </div>
        <div className='contacts_FormContainer'>
          <form onSubmit={sendForm}>
            <div className='col2'>
              <div className='form_group'>
                <label>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                />
                {checker && errors.firstName ? (
                  <p className='valError'>{errors.firstName}</p>
                ) : null}
              </div>
              <div className='form_group'>
                <label>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                />
                {checker && errors.lastName ? (
                  <p className='valError'>{errors.lastName}</p>
                ) : null}
              </div>
            </div>
            <div className='col2'>
              <div className='form_group'>
                <label>Email</label>
                <input
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                />
                {checker && errors.email ? (
                  <p className='valError'>{errors.email}</p>
                ) : null}
              </div>
              <div className='form_group'>
                <label>Phone #</label>
                <input
                  type='number'
                  name='phone'
                  value={values.phone}
                  onChange={handleChange}
                />
                {checker && errors.phone ? (
                  <p className='valError'>{errors.phone}</p>
                ) : null}
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
                    <div className='combo_box'>
                      <FormControl className='selectBox'>
                        <InputLabel>Service</InputLabel>
                        <Select
                          name='service'
                          value={values.service}
                          onChange={handleChange}
                        >
                          <MenuItem value=''>
                            <em>None</em>
                          </MenuItem>
                          {services.map((item) => (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {checker && errors.service ? (
                        <p className='valError'>{errors.service}</p>
                      ) : null}
                    </div>
                  ) : null}
                  {GetQuote ? (
                    <div className='combo_box'>
                      <FormControl className='selectBox'>
                        <InputLabel>Budget (optional)</InputLabel>
                        <Select
                          value={values.budget}
                          name='budget'
                          onChange={handleChange}
                        >
                          <MenuItem value=''>
                            <em>None</em>
                          </MenuItem>
                          {budgets.map((item) => (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo'>
                <label>Message</label>
                <textarea
                  placeholder='Write you message here'
                  name='message'
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                {checker && errors.message ? (
                  <p className='valError'>{errors.message}</p>
                ) : null}
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo submit'>
                <button className='sendButton' type='submit'>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Recaptcha
        ref={reRef}
        sitekey='6LfT9LoaAAAAAHNiZy1wELmn4gYTuNbPTU1AWnGg'
        onResolved={() => console.log('Human detected.')}
      />
    </div>
  );
}

export default withRouter(Contacts);
