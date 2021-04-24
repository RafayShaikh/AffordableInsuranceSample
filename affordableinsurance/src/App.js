import React, { useEffect, useState } from 'react';
import 'babel-polyfill';
import { selectAppData } from './features/appSlice';
import './App.css';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Aboutbios from './components/About/Aboutbios';
import Contacts from './components/Contacts/Contacts';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Service_Info from './components/Services/ServiceInfo';
import Service_Form from './components/Services/ServiceForm';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';

function App() {
  const [header, setHeader] = useState('header');
  const dataSlice = useSelector(selectAppData);

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
          {dataSlice?.email && <h1>Admin Privileges Activated.</h1>}
          <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/about' exact component={About} />
            <Route path='/about/:id' exact component={Aboutbios} />
            <Route path='/products' exact component={Products} />
            <Route path='/services' exact component={Services} />
            <Route path='/services/:id' exact component={Service_Info} />
            <Route path='/services/:id/form' exact component={Service_Form} />
            <Route path='/contacts' exact component={Contacts} />
            <Route path='/' exact component={Home} />
            <Route path='/:id' exact component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
