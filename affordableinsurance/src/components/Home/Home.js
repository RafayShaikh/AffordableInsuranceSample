import React, { useEffect } from 'react';
import Home_Head from './Home_Head';
import Home_Service from './Home_Service';
import './Home.css';
import Home_Banner from './Home_Banner';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../features/appSlice';
import locationPic from './../About/employeepics/locationPic.JPG';

function Home() {
  const dataSlice = useSelector(selectAppData);

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
      <img className='home_image' src={locationPic} alt='' />
      <h1>Select One For More Services</h1>
      <div className='home_services'>
        <Home_Service />
      </div>
    </div>
  );
}

export default Home;
