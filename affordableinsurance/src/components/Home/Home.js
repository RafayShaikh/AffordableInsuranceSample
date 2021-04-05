import React, { useEffect } from 'react';
import Home_Head from './Home_Head';
import Home_Service from './Home_Service';
import './Home.css';
import Home_Banner from './Home_Banner';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='home_container'>
      <div className='home_banner'>
        <Home_Banner />
      </div>
      <div className='home_text'>
        <Home_Head />
      </div>
      <div className='home_services'>
        <Home_Service />
      </div>
    </div>
  );
}

export default Home;
