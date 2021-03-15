import React, { useEffect, useState } from 'react';
import './About.css';
function About() {
  const [about, setAbout] = useState([
    'Lauro Cuellar',
    'Arthur Garza',
    'Robert Valdez III',
    'Jeremy Dominguez',
    'Pris Ortiz',
    'Javier De La Cerda',
  ]);

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
      <div>
        <h3>We Offer Quotes By:</h3>
        <div>Phone</div>
        <div>Email</div>
        <div>Fax</div>
        <div className='about_bios'>
          {about.map((val) => (
            <h2>{val}</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
