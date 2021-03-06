import React from 'react';
import './Header.css';
import Navigation from './Navigation';

function Header({ header }) {
  return (
    <>
      {header === 'header' ? (
        <div className='header_container'>
          <div className='header_left'>
            <div className='header_logo'>
              <img
                src='http://www.affordableinsoftx.com/wp-content/uploads/2019/07/aiot-logo.jpg'
                alt=''
              />{' '}
            </div>
            <div className='header_navigation'>
              <Navigation />
            </div>
          </div>
          <div className='header_right'>
            <div className='header_contact'>3619045275</div>
          </div>
        </div>
      ) : (
        <div className='header_container2'>
          <div className='header_logo2'>
            <img
              src='http://www.affordableinsoftx.com/wp-content/uploads/2019/07/aiot-logo.jpg'
              alt=''
            />{' '}
          </div>
          <div className='header_navigation2'>
            <Navigation />
          </div>
          <div className='header_contact2'>3619045275</div>
        </div>
      )}
    </>
  );
}

export default Header;
