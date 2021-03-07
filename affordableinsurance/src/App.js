import React, { useEffect, useState } from 'react';
import { app } from './features/appSlice';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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

      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            asfasdfadfadfasdfsadfa
          </a>
          <h1>Rafay</h1>
          <h1>Daniel</h1>
          <h1>Joe</h1>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header>


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
        <Footer />
      </div>

    </div>
  );
}

export default App;
