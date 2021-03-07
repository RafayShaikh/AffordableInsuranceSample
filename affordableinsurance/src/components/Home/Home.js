import React from 'react';
import Home_Head from './Home_Head';
import Home_Service from './Home_Service';
import './Home.css';

function Home() {
  return (
    <div className='home_container'>
      <div className='home_text'>
        <Home_Head />
      </div>
      <div className='home_servivces'>
        <Home_Service />
      </div>
    </div>
  );
}

export default Home;
