import React, { useState, useEffect } from 'react';
import './About.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { add, selectAppData } from '../../features/appSlice';
import Typist from 'react-typist';

import { db, storage } from '../../firebase';

function About({ match }) {
  const [about, setAbout] = useState([]);
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
      .then(() => {
        history.replace('/about');
        e.target.name.value = '';
        e.target.desc.value = '';
        e.target.file.value = '';
        alert('Successfully Added The New Employee Data');
      });
  };
  const deleteItem = async (name) => {
    var fileName = null;
    await db
      .collection('employee')
      .doc(name)
      .get()
      .then((doc) => {
        fileName = doc.data();
        const storageRef = storage.refFromURL(fileName.picture);
        storageRef
          .delete()
          .then()
          .catch((error) => {});
      });
    await db
      .collection('employee')
      .doc(name)
      .delete()
      .then(() => {
        history.push('/about');
        alert('Deleted The Employee Data');
      });
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
    return true;
  }, []);
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
            key={id}
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteItem(doc.name);
                  }}
                >
                  Delete This Entry
                </button>
              </div>
            )}
          </div>
        ))}
        {dataSlice?.email && (
          <form className='about_form' onSubmit={onSubmit}>
            <h2>Add Employee</h2>
            <input type='file' name='file' onChange={onFileChange} />
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
