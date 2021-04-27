import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';
function NotFound() {
  const history = useHistory();
  const clickHandler = (e) => {
    e.preventDefault();
    history.push('/contacts');
  };
  return (
    <div className='notfound'>
      <h1>Congratulations!</h1>
      <h2>You've reached the top of our site.</h2>
      <h2>We'll Get You Covered !</h2>
      <button onClick={clickHandler}>Contact Us</button>
    </div>
  );
}

export default NotFound;
