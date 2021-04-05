import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className='admin_page'>
      <div className='admin_container'>
        <h2>Only Admin Allowed Beyond This Point !</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
