import React, { useState, useEffect } from 'react';
import './Contacts.css';
import validate from '../../features/validateInfo';
import useForm from '../../features/useForm';
import { withRouter } from 'react-router';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Recaptcha from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { Phone, Mail, Room, Facebook, LocalParking } from '@material-ui/icons';

function Contacts() {
  const {
    counter,
    QuickQuest,
    GetQuote,
    handleChange,
    handleRadio,
    handleContactSubmit,
    values,
    errors,
  } = useForm(submitForm, validate);

  const [submitted, setSubmitted] = useState(false);
  function submitForm(captchaValue) {
    var data = {
      name: values?.firstName + ' ' + values?.lastName,
      selection: values?.service + ' ' + values?.budget,
      email: values?.email,
      phone: values?.phone,
      message: values?.message,
      'g-recaptcha-response': captchaValue,
    };
    emailjs
      .send(
        'service_xhdy2ag',
        'template_xodz2i9',
        data,
        'user_XTFXToGlN5MdxYo0hYMDd'
      )
      .then(
        (result) => {},
        (error) => {}
      );
    setButton(false);
    setSubmitted(true);
  }
  const [button, setButton] = useState(false);

  const services = [
    'Auto/Trucks',
    'Builders Risk',
    'Bonds',
    'Boats',
    'Comercial Auto/Cargo',
    'Commercial Property',
    'Commercial Liability',
    'Flood',
    'Home Owners',
    'Liquor Liability',
    'Motorcycle',
    'Mobile Homes',
    'Mexico Insurance',
    'Recreational Vehicles',
    'Renter’s policies',
    'Special Events',
    'SR22s',
    'Windstorm',
    'Workers’ Comp',
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
          <form onSubmit={handleContactSubmit}>
            <div className='col2'>
              <div className='form_group'>
                <label>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                />
                {counter && errors.firstName ? (
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
                {counter && errors.lastName ? (
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
                {counter && errors.email ? (
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
                {counter && errors.phone ? (
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
                      onChange={handleRadio}
                    />
                    <label for='radioQuestion'>Quick Question</label>
                  </div>
                  <div className='radio_button'>
                    <input
                      type='radio'
                      name='type'
                      id='radioQuote'
                      value={GetQuote}
                      onChange={handleRadio}
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
                      {counter && errors.service ? (
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
                {counter && errors.message ? (
                  <p className='valError'>{errors.message}</p>
                ) : null}
              </div>
            </div>
            <div className='col2'>
              <div className='form_group solo submit'>
                <Recaptcha
                  render='explicit'
                  sitekey={'6Lfo_7oaAAAAAD4jHMCcQgmWo1IUDw2RwOh6t8qn'}
                  onChange={() => {
                    setButton(true);
                  }}
                />
                {button ? (
                  <button className='sendButton' type='submit'>
                    Send Message
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
