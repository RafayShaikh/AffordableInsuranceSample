import React, { useState } from 'react';
import './Services.css';
import HouseIcon from '@material-ui/icons/House';
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
import { add } from '../../features/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Services({ match }) {
  const [services, setServices] = useState([
    [
      DriveEta,
      'Auto/Trucks',
      'Everyday use personal vehicles to go to and from work and school. This would also include Classic cars, custom cars, etc.',
    ],
    [
      Business,
      'Builders Risk',
      'Insurance during the time of construction of a new dwelling and/or commercial building. Also during renovations of such buildings. Commonly for the owner of the structure.',
    ],
    [
      Assignment,
      'Bonds',
      'Loss Title Bonds, Surety Bonds and Performance Bonds.',
    ],
    [DirectionsBoat, 'Boats', ''],
    [
      LocalShipping,
      'Comercial Auto/Cargo',
      "Motor truck Cargo Insurance provides insurance on the freight or commodity hauled by a for-hire trucker. It covers your liability for cargo that is lost or damaged due to causes such as fire, collision, or striking of a load. If your load is accidentally dumped on a roadway or waterway(removal expenses coverage) our coverage pays for the cost to remove debris or extra pollutants caused by the debris. We'll also pay for costs related to preventing further loss to damaged cargo. (Sue and labor coverage ), legal expenses in the defense or settlement of Claims' and even freight charges the customer loses because of not delivering a load (Earned Freight Coverage)",
    ],
    [
      BusinessCenter,
      'Commercial Liability',
      'This policy protects your business from financial loss should you be liable for property damage, personal, or advertising injury caused by your services, business operations or your employees. ',
    ],
    [
      Store,
      'Commercial Property',
      'Commercial Property policies cover your building and all of its contents, as well as any exterior ixtures associated with your business, such as a fence or outside sign. THe protection of your physical property and its contents extends to damages caused by fire, burst pipes, storms, vandalism, and explosions.',
    ],
    [
      Waves,
      'Flood',
      'Insurance that cover rising water. The water can come from the ocean, a storm surge, A swelling river, or even an abundance of rain. This coverage comes from water outside the home not from a pipe burst inside the home.',
    ],
    [
      HouseIcon,
      'Home Owners',
      "Is a type of property insurance that covers a private residence.  It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one's home it's contents, loss of use (additional living expenses) or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the handsof the homeowner within the policy territory Additionally, homeowner's insurance provides financial protection against disasters. A standard home insurance policy insures the home itself along with the things kept inside.",
    ],
    [
      LocalDrink,
      'Liquor Liability',
      'This policy is used as a complement to your general liability commonly used for restaurants and/or bars.',
    ],
    [TwoWheeler, 'Motorcycle', ''],
    [RvHookup, 'Mobile Home', ''],
    [
      BeachAccess,
      'Mexico Insurance',
      'This policy is an extension of your current policy in the U.S. you can have full coverage in Mexico but you must have full coverage on your domestic policy.',
    ],
    [
      AirportShuttle,
      'Recreational Vehicles',
      "This includes motorcycles, boats, travel trailers, RV's, golf carts, motor homes, ATV's, jet ski's, trikes.",
    ],
    [
      AttachMoney,
      'Renter’s policies',
      'Covers content and personal property in a rented dwelling. Liability is included',
    ],
    [
      EventAvailable,
      'Special Events',
      'Special event liability insurance covers short-term private events against bodily injury and property damage claims. Many venues require event organizers to carry liability insurance.  Help pay medical expenses if a guest is injured.  Protect venue property from damage, including the building and equipment.',
    ],
    [
      VerifiedUser,
      'SR22s',
      'This policy is a state required liability insurance. Commonly needed for a certain length of time. This policy reports coverage to whatever state requiring this coverage.',
    ],
    [
      Cloud,
      'Windstorm',
      'Insurance that cover any type of Wind Event. Hurricane or Tropical Storm or even any cold front. Simply any wind and hail event. These are policies for both personal and commercial purposes.',
    ],
    [
      SupervisorAccount,
      'Workers’ Comp',
      "This insurance covers an employer's workers during the time and in the course of working for the company. This is a medical insurance coverage in case of an accident.",
    ],
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
