import React, { useEffect, useState } from 'react';
import { app } from './features/appSlice';
import './App.css';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import Home from './components/Home/Home';

function App() {
  const [header, setHeader] = useState('header');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader('header');
    } else if (window.scrollY > 70) {
      return setHeader('2');
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
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
