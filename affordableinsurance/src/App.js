import React, { useEffect, useState } from 'react';
import { app } from './features/appSlice';
import './App.css';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Products from './components/Products/Products';
import Services from './components/Services/Services';

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
    <Router>
      <div className='App'>
        <Header header={header} />
        <div className='Body'>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/services' component={Services} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
