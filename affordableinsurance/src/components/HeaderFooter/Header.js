import React from 'react';
import './Header.css';
import Navigation from './Navigation';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { useHistory } from 'react-router';

function Header({ header }) {
  const history = useHistory();

  const clickHandler = (url) => {
    history.push(url);
  };

  return (
    <>
      {header === 'header' ? (
        <div className='header_container'>
          <div className='header_left'>
            <img
              className='header_logo'
              onClick={() => clickHandler('/')}
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
            <div className='header_logo2' onClick={() => clickHandler('/')}>
              <img src='/Full_Color_Logo.png' alt='' />
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
