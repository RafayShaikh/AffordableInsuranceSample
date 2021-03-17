import React, { useEffect } from 'react';
import { useState } from 'react';
import './Service_Form.css';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../features/appSlice';
import { useHistory } from 'react-router';
import Service_Submitted from './Service_Submitted';
import validate from '../../features/validateInfo';
import useForm from '../../features/useForm';

function Service_Form() {
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const {
    steps,
    handleNext,
    handleChange,
    handleSubmit,
    values,
    errors,
  } = useForm(submitForm, validate);
  const [submitted, setSubmitted] = useState(false);
  function submitForm() {
    setSubmitted(true);
  }

  /*
  const clickFName = (event) => {
    const { value } = event.target;
    setForm({ ...values, firstName: value });
  };3
  const clickLName = (event) => {
    const { value } = event.target;
    setForm({ ...values, lastName: value });
  };
  const clickDOB = (event) => {
    const { value } = event.target;
    setForm({ ...values, dob: value });
  };
  const clickEmail = (event) => {
    const { value } = event.target;
    setForm({ ...values, email: value });
  };
  const clickPhone = (event) => {
    const { value } = event.target;
    setForm({ ...values, phone: value });
  };
  const clickStreet = (event) => {
    const { value } = event.target;
    setForm({ ...values, street: value });
  };
  const clickCity = (event) => {
    const { value } = event.target;
    setForm({ ...values, city: value });
  };
  const clickState = (event) => {
    const { value } = event.target;
    setForm({ ...values, state: value });
  };
  const clickZipcode = (event) => {
    const { value } = event.target;
    setForm({ ...values, zipcode: value });
  };
  const submit = () => {
    var temp =
      values.street + ', ' + values.city + ', ' + values.state + ', ' + values.zipcode;
    setForm({ ...values, address: temp });

    setSubmitted(true);
  };*/

  useEffect(() => {
    if (dataSlice?.insuranceName === null) {
      history.push('/services');
    }
  }, []);
  return (
    <div className='service_formContainer'>
      <div className='service_formArea'>
        <h2>Please fillout the form below</h2>
        {values.selection && (
          <h3>Your Selection: {values.selection} Insurance</h3>
        )}
        {values?.lastName && (
          <h3>Your Name: {values?.firstName + ' ' + values?.lastName} </h3>
        )}
        {values?.dob && <h3>Your Date of Birth: {values?.dob} </h3>}
        {values?.email && <h3>Your email: {values?.email}</h3>}
        {values?.phone && <h3>Your Phone: {values?.phone}</h3>}
        {values?.zipcode && (
          <h3>
            Your Address: {values?.street},{values?.city}, {values?.state},{' '}
            {values?.zipcode}
          </h3>
        )}
        <form onSubmit={handleSubmit} className='form' noValidate>
          {steps === 1 && (
            <div className='service_formSection'>
              <h1>{'Step ' + steps + ' of 4'}</h1>
              <label>First Name</label>
              <input
                className='form-input'
                type='text'
                name='firstName'
                placeholder='Enter your First Name'
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}

              <label>Last Name</label>
              <input
                className='form-input'
                type='text'
                name='lastName'
                placeholder='Enter your Last Name'
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
              <div className='service_formNext' onClick={handleNext}>
                Next
              </div>
            </div>
          )}
          {steps === 2 && (
            <div className='service_formSection'>
              <h1>{'Step ' + steps + ' of 4'}</h1>
              <label>Date of Birth</label>
              <input
                className='form-input'
                type='date'
                name='dob'
                placeholder='Select your Date of Birth'
                value={values.dob}
                onChange={handleChange}
              />
              {errors.dob && <p>{errors.dob}</p>}

              <div className='service_formNext' onClick={handleNext}>
                Next
              </div>
            </div>
          )}
          {steps === 3 && (
            <div className='service_formSection'>
              <h1>{'Step ' + steps + ' of 4'}</h1>
              <label>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}

              <label>Phone Number</label>
              <input
                className='form-input'
                type='number'
                name='phone'
                placeholder='Enter your Phone Number'
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p>{errors.phone}</p>}

              <div className='service_formNext' onClick={handleNext}>
                Next
              </div>
            </div>
          )}
          {steps === 4 && (
            <div className='service_formSection'>
              <h1>{'Step ' + steps + ' of 4'}</h1>

              <label>Street</label>
              <input
                className='form-input'
                type='text'
                name='street'
                placeholder='Enter your street'
                value={values.street}
                onChange={handleChange}
              />
              {errors.street && <p>{errors.street}</p>}

              <label>City</label>
              <input
                className='form-input'
                type='text'
                name='city'
                placeholder='Enter your city'
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <p>{errors.city}</p>}

              <label>State</label>
              <input
                className='form-input'
                type='text'
                name='state'
                placeholder='Enter your state'
                value={values.state}
                onChange={handleChange}
              />
              {errors.state && <p>{errors.state}</p>}

              <label>Zipcode</label>
              <input
                className='form-input'
                type='text'
                name='zipcode'
                placeholder='Enter your zipcode'
                value={values.zipcode}
                onChange={handleChange}
              />
              {errors.zipcode && <p>{errors.zipcode}</p>}

              <button className='service_formNext' type='submit'>
                Submit
              </button>
            </div>
          )}
        </form>
        {submitted && <Service_Submitted />}
      </div>
    </div>
  );
}

export default Service_Form;
