import React from 'react';
import './HomeService.css';
import HouseIcon from '@material-ui/icons/House';
import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';
import BusinessIcon from '@material-ui/icons/Business';
import CommuteIcon from '@material-ui/icons/Commute';
import { useHistory } from 'react-router';

function HomeService() {
  const history = useHistory();
  const clickHandler = (url) => {
    history.push(url);
  };
  return (
    <div className='home_service_container'>
      <div
        onClick={() => clickHandler('/services')}
        className='home_service_item'
      >
        <HouseIcon />
        <h3>Homeowner's Insurance</h3>
      </div>
      <div
        onClick={() => clickHandler('/services')}
        className='home_service_item'
      >
        <CommuteIcon />
        <h3>Vehicle Insuarance</h3>
      </div>
      <div
        onClick={() => clickHandler('/services')}
        className='home_service_item'
      >
        <LocalConvenienceStoreIcon />
        <h3>Workers' Comp Insurance</h3>
      </div>
      <div
        onClick={() => clickHandler('/services')}
        className='home_service_item'
      >
        <BusinessIcon />
        <h3>Commercial Insurance</h3>
      </div>
      <div
        onClick={() => clickHandler('/services')}
        className='home_service_item'
      >
        <CommuteIcon />
        <h3>Mexico Car Insurance</h3>
      </div>
    </div>
  );
}

export default HomeService;
