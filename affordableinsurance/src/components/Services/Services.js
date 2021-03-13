import React, { useState } from 'react';
import './Services.css';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloudIcon from '@material-ui/icons/Cloud';
import BusinessIcon from '@material-ui/icons/Business';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import RvHookupIcon from '@material-ui/icons/RvHookup';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StoreIcon from '@material-ui/icons/Store';
import WavesIcon from '@material-ui/icons/Waves';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { SvgIcon } from '@material-ui/core';
function Services() {
  const [services, setServices] = useState([
    [DriveEtaIcon, 'Auto/Trucks'],
    [AssignmentIcon, 'Bonds'],
    [CloudIcon, 'Windstorm'],
    [BusinessIcon, 'Builders Risk'],
    [MotorcycleIcon, 'Motorcycle'],
    [RvHookupIcon, 'Recreational Vehicles'],
    [LocalShippingIcon, 'Mobile Homes'],
    [DirectionsBoatIcon, 'Boats'],
    [WavesIcon, 'Flood'],
    [SupervisorAccountIcon, 'Workers’ Comp'],
    [StoreIcon, 'Commercial Insurance'],
    [BusinessCenterIcon, 'Commercial Liability'],
    [AttachMoneyIcon, 'Renter’s policies'],
    [LocalDrinkIcon, 'Liquor Liability'],
    [BeachAccessIcon, 'Mexico Insurance'],
    [VerifiedUserIcon, 'SR22s'],
  ]);

  return (
    <div className='services_container'>
      <div className='services_description'>
        <h2>
          Full-Serivce Insurance Agency Serving Corpus Christi and Nearby Areas
        </h2>
        <p>
          If experience and service are important to you, you owe it to yourself
          to turn to Affordable Insurance of Texas for all your insurance needs.
          Tired of hearing about good rates you didn’t receive? Then it’s time
          for Affordable Insurance of Texas! Call us today for more information!
        </p>
      </div>
      <div className='services_selection'>
        <h2>Select One for More Information</h2>
      </div>
      <div className='services_offered'>
        {services.map((val) => (
          <div className='services_offeredBox'>
            <SvgIcon component={val[0]} />
            <h2>{val[1]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
