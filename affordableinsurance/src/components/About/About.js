import React, { useState, useEffect} from 'react';
import './About.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { add, appSlice, remove } from '../../features/appSlice';
import Typist from 'react-typist';




function About({ match }) {
  const [about, setAbout] = useState([
    'Lauro Cuellar',
    'Arthur V. Garza',
    'Robert Valdez III',
    'Jeremy Dominguez',
    'Pris Ortiz',
    'Javier De La Cerda',
  ]);


  const history = useHistory();
  const dispatch = useDispatch();


  const clickHandler = (url, name, text) => {
    const data = {
      individualName: name,
      individualDescription: text,
    };
    dispatch(add(data));
    history.push(url);
  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='about_container'>

      <div className='about_description'>
        <h1>About Affordable Insurance of Texas</h1>
        <p>
          Welcome to the website of Affordable Insurance of Texas, serving the
          Corpus Christi area. We are an insurance agency dedicated to finding
          our clients the best deals on coverage for vehicles, homes, businesses
          and more. We’ve provided thorough, reliable for Corpus Christi
          residents and businesses for many years. Let us put our experience to
          work for you! Please browse the rest of this site to learn more about
          the coverage programs we offer. And for all your insurance needs,
          depend on the experts at Affordable Insurance of Texas!
        </p>
      </div>
      <div className='about_quotes'>
         <Typist avgTypingDelay={50} cursor={{ show: false }}>
        <h2>Get To Know Us Today</h2>
        </Typist>

        <div className='about_bios'>
          {about.map((val, id) => (
           <div 
              className="about_individuals"
              onClick={() =>
              clickHandler(`${match.url}/${id}`, val)
            }>
           
           <h2>{val}</h2>
           


           </div>
            

          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
