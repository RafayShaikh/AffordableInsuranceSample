import React, { useEffect } from 'react';
import { useState } from 'react';
import './Service_Form.css';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../features/appSlice';
import { useHistory } from 'react-router';
import Service_Submitted from './Service_Submitted';

function Service_Form() {
  const [steps, setSteps] = useState(1);
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const [form, setForm] = useState({
    firstName: null,
    lastName: null,
    selection: dataSlice?.insuranceName,
    dob: null,
    email: null,
    phone: null,
    address: null,
    street: null,
    city: null,
    state: null,
    zipcode: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const clickFName = (event) => {
    const { value } = event.target;
    setForm({ ...form, firstName: value });
  };
  const clickLName = (event) => {
    const { value } = event.target;
    setForm({ ...form, lastName: value });
  };
  const clickDOB = (event) => {
    const { value } = event.target;
    setForm({ ...form, dob: value });
  };
  const clickEmail = (event) => {
    const { value } = event.target;
    setForm({ ...form, email: value });
  };
  const clickPhone = (event) => {
    const { value } = event.target;
    setForm({ ...form, phone: value });
  };
  const clickStreet = (event) => {
    const { value } = event.target;
    setForm({ ...form, street: value });
  };
  const clickCity = (event) => {
    const { value } = event.target;
    setForm({ ...form, city: value });
  };
  const clickState = (event) => {
    const { value } = event.target;
    setForm({ ...form, state: value });
  };
  const clickZipcode = (event) => {
    const { value } = event.target;
    setForm({ ...form, zipcode: value });
  };
  const submit = () => {
    var temp =
      form.street + ', ' + form.city + ', ' + form.state + ', ' + form.zipcode;
    setForm({ ...form, address: temp });

    setSubmitted(true);
  };
  const next = () => {
    setSteps(steps + 1);
  };

  useEffect(() => {
    if (dataSlice?.insuranceName === null) {
      history.push('/services');
    }
  }, []);
  return (
    <div className='service_formContainer'>
      <div className='service_formArea'>
        <h2>Please fillout the form below</h2>
        {form.selection && <h3>Your Selection: {form.selection} Insurance</h3>}
        {form?.lastName && (
          <h3>Your Name: {form?.firstName + ' ' + form?.lastName} </h3>
        )}
        {form?.dob && <h3>Your Date of Birth: {form?.dob} </h3>}
        {form?.email && <h3>Your email: {form?.email}</h3>}
        {form?.phone && <h3>Your Phone: {form?.phone}</h3>}
        {form?.zipcode && (
          <h3>
            Your Address: {form?.street},{form?.city}, {form?.state},{' '}
            {form?.zipcode}
          </h3>
        )}

        {steps === 1 && (
          <div className='service_formSection'>
            <h1>{'Step ' + steps + ' of 4'}</h1>
            <h5>First Name</h5>
            <input type='text' onChange={clickFName} />
            <h5>Last Name</h5>
            <input type='text' onChange={clickLName} />
            <div className='service_formNext' onClick={next}>
              Next
            </div>
          </div>
        )}
        {steps === 2 && (
          <div className='service_formSection'>
            <h1>{'Step ' + steps + ' of 4'}</h1>
            <h5>Date of Birth</h5>
            <input type='date' onChange={clickDOB} />
            <div className='service_formNext' onClick={next}>
              Next
            </div>
          </div>
        )}
        {steps === 3 && (
          <div className='service_formSection'>
            <h1>{'Step ' + steps + ' of 4'}</h1>
            <h5>Email</h5>
            <input type='email' onChange={clickEmail} />
            <h5>Phone Number</h5>
            <input type='phone' onChange={clickPhone} />
            <div className='service_formNext' onClick={next}>
              Next
            </div>
          </div>
        )}
        {steps === 4 && (
          <div className='service_formSection'>
            <h1>{'Step ' + steps + ' of 4'}</h1>

            <h5>Street</h5>
            <input type='text' onChange={clickStreet} />
            <h5>City</h5>
            <input type='text' onChange={clickCity} />
            <h5>State</h5>
            <input type='text' onChange={clickState} />
            <h5>Zipcode</h5>
            <input type='text' onChange={clickZipcode} />
            <div className='service_formNext' onClick={submit}>
              Submit
            </div>
          </div>
        )}
      </div>
      {submitted && <Service_Submitted />}
    </div>
  );
}

export default Service_Form;
