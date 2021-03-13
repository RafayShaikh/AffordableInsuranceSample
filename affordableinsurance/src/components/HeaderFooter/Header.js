import React from 'react';
import './Header.css';
import Navigation from './Navigation';
import MicNoneIcon from '@material-ui/icons/MicNone';

function Header({ header }) {
  return (
    <>
      {header === 'header' ? (
        <div className='header_container'>
          <div className='header_left'>
            <img
              className='header_logo'
              src='/Full_Color_Logo.png'
              alt=''
            />
            <div className='header_navigation'>
              <Navigation />
            </div>
          </div>
          <div className='header_right'>
            <MicNoneIcon />
            <p>Talk to us</p>
            <div className='header_contact'>
              <h5>361-854-0207</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className='header_container2'>
          <div className='header_left2'>
            <div className='header_logo2'>
              <img
                src='/Full_Color_Logo.png'
                alt=''
              />{' '}
            </div>
            <div className='header_navigation2'>
              <Navigation />
            </div>
          </div>
          <div className='header_right2'>
            <MicNoneIcon />
            <div className='header_contact2'>361-854-0207</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
