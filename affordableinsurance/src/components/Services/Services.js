import React, { useState } from 'react';
import './Services.css';
import {
  DriveEta,
  Assignment,
  Cloud,
  Business,
  TwoWheeler,
  RvHookup,
  LocalShipping,
  DirectionsBoat,
  SupervisorAccount,
  Store,
  Waves,
  BeachAccess,
  BusinessCenter,
  AttachMoney,
  LocalDrink,
  VerifiedUser,
  EventAvailable,
  AirportShuttle,
} from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';
import Typist from 'react-typist';
import { useHistory } from 'react-router';
import { add, appSlice, remove } from '../../features/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Services({ match }) {
  const [services, setServices] = useState([
    [DriveEta, 'Auto/Trucks'],
    [Business, 'Builders Risk'],
    [Assignment, 'Bonds'],
    [DirectionsBoat, 'Boats'],
    [LocalShipping, 'Comercial Auto/Cargo'],
    [BusinessCenter, 'Commercial Liability'],
    [Store, 'Commercial Property'],
    [Waves, 'Flood'],
    [LocalDrink, 'Liquor Liability'],
    [TwoWheeler, 'Motorcycle'],
    [BeachAccess, 'Mexico Insurance'],
    [RvHookup, 'Mobile Home'],
    [AirportShuttle, 'Recreational Vehicles'],
    [AttachMoney, 'Renter’s Policies'],
    [EventAvailable, 'Special Events'],
    [VerifiedUser, 'SR22s'],
    [Cloud, 'Windstorm'],
    [SupervisorAccount, 'Workers’ Comp'],
  ]);

  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (url, logo, name, text) => {
    const data = {
      insuranceLogo: <SvgIcon component={logo} />,
      insuranceName: name,
      InsuranceDescription: text,
    };
    dispatch(add(data));
    history.push(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='services_container'>
      <div className='services_description'>
        <h2>Full-Serivce Insurance Agency Serving Texas</h2>
        <h3>Whatever you can buy we can insure</h3>
        <p>
          If experience and service are important to you, you owe it to yourself
          to turn to Affordable Insurance of Texas for all your insurance needs.
          Tired of hearing about good rates you didn’t receive? Then it’s time
          for Affordable Insurance of Texas! Call us today for more information!
        </p>
      </div>
      <div className='services_selection'>
        <Typist avgTypingDelay={25} cursor={{ show: false }}>
          <h2>Select One for More Information</h2>
        </Typist>
      </div>
      <div className='services_offered'>
        {services.map((val, id) => (
          <div
            className='services_offeredBox'
            onClick={() =>
              clickHandler(`${match.url}/${id}`, val[0], val[1], val[2])
            }
          >
            <SvgIcon component={val[0]} />
            <h2>{val[1]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
