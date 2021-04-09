import React, { useState, useEffect } from 'react';
import './About.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { add, appSlice, remove } from '../../features/appSlice';
import Typist from 'react-typist';
import pic from './employeepics/Dan.png';

function About({ match }) {
  const [about, setAbout] = useState([
    [pic, 'Lauro Cuellar'],
    [pic, 'Arthur V. Garza'],
    [pic, 'Robert Valdez III'],
    [pic, 'Jeremy Dominguez'],
    [pic, 'Pris Ortiz'],
    [pic, 'Javier De La Cerda'],
    [pic, 'Daniel Freaking Legend'],
  ]);

  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (url, name, pic, text) => {
    const data = {
      individualName: name,
      individualDescription: text,
      individualPic: <img src={pic} alt={name} />,
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
          <h2>Get To Know Us Today!</h2>
        </Typist>
      </div>

      <div className='about_bios'>
        {about.map((val, id) => (
          <div
            className='about_individuals'
            onClick={() =>
              clickHandler(`${match.url}/${id}`, val[1], val[0], val[2])
            }
          >
            <img src={val[0]} alt={val[1]} />
            <h2>{val[1]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
