import React from 'react';
import './Navigation.css';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const history = useHistory();

  const clickHandler = (url) => {
    history.push(url);
  };
  return (
    <div className='navigation_container'>
      <div className='navigation_list'>
        <h4 onClick={() => clickHandler('./')}>Home</h4>
        <h4 onClick={() => clickHandler('./about')}>About</h4>
        <h4 onClick={() => clickHandler('./products')}>Products</h4>
        <h4 onClick={() => clickHandler('./services')}>Services</h4>
        <h4 onClick={() => clickHandler('./contacts')}>Contact Us</h4>
      </div>
    </div>
  );
}

export default Navigation;
