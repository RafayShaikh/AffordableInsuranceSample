import React from 'react';
import './Home_Service.css';
import HouseIcon from '@material-ui/icons/House';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import BusinessIcon from '@material-ui/icons/Business';
import CommuteIcon from '@material-ui/icons/Commute';

function Home_Service() {
  return (
    <div className='home_service_container'>
      <div className='home_service_item'>
        <HouseIcon />
        <h3>Homeowner's Insurance</h3>
      </div>
      <div className='home_service_item'>
        <CommuteIcon />
        <h3>Vehicle Insuarance</h3>
      </div>
      <div className='home_service_item'>
        <LocalConvenienceStoreIcon />
        <h3>Workers' Comp Insurance</h3>
      </div>
      <div className='home_service_item'>
        <BusinessIcon />
        <h3>Commercial Insurance</h3>
      </div>
      <div className='home_service_item'>
        <CommuteIcon />
        <h3>Mexico Car Insurance</h3>
      </div>
    </div>
  );
}

export default Home_Service;
