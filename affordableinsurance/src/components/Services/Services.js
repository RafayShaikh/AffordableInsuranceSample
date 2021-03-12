import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [services, setServices] = useState([
    'Auto/Trucks',
    'Bonds',
    'Windstorm',
    'Builders Risk',
    'Motorcycle',
    'Recreational Vehicles',
    'Mobile Homes',
    'Boats',
    'Flood',
    'Workers’ Comp',
    'Commercial Insurance',
    'Commercial Liability',
    'Renter’s policies',
    'Liquor Liability',
    'Mexico Insurance',
    'SR22s',
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
          <h2>{val}</h2>
        ))}
      </div>
    </div>
  );
}

export default Services;
