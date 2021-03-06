import React, { useEffect, useState } from 'react';
import { app } from './features/appSlice';
import './App.css';
import Header from './components/Header';

function App() {
  const [header, setHeader] = useState('header');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader('header');
    } else if (window.scrollY > 70) {
      return setHeader('header2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className='App'>
      <Header header={header} />
      <div className='Body'>
        <h1>Place Holder</h1>
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1> <h1>Place Holder</h1> <h1>Place Holder</h1>{' '}
        <h1>Place Holder</h1>
      </div>
    </div>
  );
}

export default App;
