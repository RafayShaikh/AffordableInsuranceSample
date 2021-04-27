import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ServiceSubmitted.css';

function Service_Submitted() {
  const [count, setCount] = useState(5);
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      history.replace('/');
    }, 5000);
    return true;
  }, []);
  useEffect(() => {
    setInterval(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <div className='service_submitted'>
      <h1>Information Submitted</h1>
      <h1>We will get back to you soon</h1>
      <div className='counter_border'>
        <h1>Redirecting to home in {count} seconds</h1>
      </div>
    </div>
  );
}

export default Service_Submitted;
