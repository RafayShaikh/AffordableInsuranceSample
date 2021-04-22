import React, { useState, useEffect } from 'react';
import './About.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { add, appSlice, remove, selectAppData } from '../../features/appSlice';
import Typist from 'react-typist';
import pic from './employeepics/Dan.png';
import pic1 from './employeepics/1.JPG';
import pic2 from './employeepics/2.JPG';
import pic3 from './employeepics/3.JPG';
import { db, storage } from '../../firebase';

function About({ match }) {
  const [about, setAbout] = useState(
    [] /*[
    [
      pic1,
      'Lauro Cuellar',
      'I’m Lauro Cuellar, owner, consultant, I have been in the insurance business for 30 years, my objective is for this insurance agency to provide the best customer service. We have experienced agents that are licensed and can insure all lines. Before, I spent 20 years with Allstate Insurance Company and I was a school teacher with a Master Degree in Education.',
    ],
    [
      pic2,
      'Arthur V. Garza',
      'My name is Arthur V Garza. I’ve been working for Affordable Insurance of Texas going on 5 years. I write every line of insurance that we offer. I studied finance and accounting at the University of Texas in Arlington for 5 years. I’ve run several businesses so when you talk to me about your business I know where your coming from. Come down and visit us. I think you’ll be very happy with what we have to offer!',
    ],
    [
      pic,
      'Robert Valdez III',
      "I, Roberto V. Valdex III am a senior agent for Affordable Insurance of Texas. I've been with the company since December of 2011. I'm a Corpus Christi Native and am fluent in Spanish. I graduated with honors from W.B. Ray High School and went on to earn my Bachelor's Degree from The University of Texas at San Antonio. I've been a licensed agent since 2010 and got my start in the insurance industry in 2003. I'd love the opportunity to earn your business. Pregunta por mi si necesitas ayuda an espanol.",
    ],
    [
      pic,
      'Jeremy Dominguez',
      'I’m Jeremy Dominguez, and I have been in the insurance business for 2 years. Before becoming a licensed insurance agent, I spend time as a junior loan officer and lobby manager for Prosperity Bank. I am also a licensed mortgage loan officer and hold a bachelor’s degree in Marketing from Texas A & M Corpus Christi.',
    ],
    [pic, 'Pris Ortiz', 'This is where the description goes'],
    [
      pic3,
      'Javier De La Cerda',
      'Hi, my name is Javier De La Cerda and I was born and raised in Corpus Christi, Texas. I’ve been happily married to my wife of 11 years and have three amazing children. Other than enjoying being a family man, I also enjoy being a licensed Independent Insurance Agent for Affordable Insurance of Texas. I have 4 years’ experience in the insurance industry and 8 years in the automotive industry at AutoNation Honda as the Finance and Insurance Director. With my experience and skills, I am confident to provide great service at a competitive rate for your insurance needs.  ',
    ],
  ]*/
  );
  const [fileUrl, setFileUrl] = useState(null);
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const dispatch = useDispatch();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;

    if (
      !name ||
      !fileUrl ||
      !desc ||
      !/^[A-Za-z]+/.test(name.trim()) ||
      !/^[A-Za-z]+/.test(desc.trim())
    ) {
      alert('Please Enter Correct Information');
      return;
    }
    await db
      .collection('employee')
      .doc(name)
      .set({
        name: name,
        picture: fileUrl,
        description: desc,
      })
      .then(alert('Successfuly Added The Employee'));
  };
  const deleteItem = async (name) => {
    await db
      .collection('employee')
      .doc(name)
      .delete()
      .then(alert('Deleted The Employee Data'));

    history.replace('/about');
  };

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
    const fetchUsers = async () => {
      const collection = await db.collection('employee').get();
      setAbout(
        collection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, [about]);
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
        {about?.map((doc, id) => (
          <div
            className='about_individuals'
            onClick={() =>
              clickHandler(
                `${match.url}/${id}`,
                doc.name,
                doc.picture,
                doc.description
              )
            }
          >
            <img src={doc.picture} alt={doc.picture} />
            <h2>{doc.name}</h2>
            {dataSlice?.email && (
              <div className='about_admin'>
                <button onClick={(e) => deleteItem(doc.name)}>
                  Delete This Entry
                </button>
              </div>
            )}
          </div>
        ))}
        {dataSlice?.email && (
          <form className='about_form' onSubmit={onSubmit}>
            <h2>Add Employee</h2>
            <input type='file' onChange={onFileChange} />
            <input type='text' name='name' placeholder='NAME' />
            <input type='textarea' name='desc' placeholder='DESCRIPTION' />

            <button>Add</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default About;
