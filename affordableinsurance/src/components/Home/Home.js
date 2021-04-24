import React, { useEffect } from 'react';
import HomeHead from './HomeHead';
import HomeService from './HomeService';
import './Home.css';
import HomeBanner from './HomeBanner';
import locationPic from './../About/employeepics/locationPic.JPG';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home_container'>
      <div className='home_banner'>
        <HomeBanner />
      </div>
      <div className='home_text'>
        <HomeHead />
      </div>
      <img className='home_image' src={locationPic} alt='' />
      <h1>Select One For More Services</h1>
      <div className='home_services'>
        <HomeService />
      </div>
    </div>
  );
}

export default Home;
