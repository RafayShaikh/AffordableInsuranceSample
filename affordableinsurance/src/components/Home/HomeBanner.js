import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../features/appSlice';
import { auth, db } from '../../firebase';
import './HomeBanner.css';

function HomeBanner() {
  const [text, setText] = useState([]);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(null);
  const dataSlice = useSelector(selectAppData);

  const fetchText = async () => {
    const snapshot = await db.collection('banner').doc('banner_text').get();
    const data = snapshot.data();
    if (!data.exists) {
      setText(data.text);
    } else {
      setText('Welcome');
    }
  };
  const updateText = async () => {
    await db
      .collection('banner')
      .doc('banner_text')
      .set({
        text: newText,
      })
      .then(() => {
        alert('Banner Updated');
        setText(newText);
      })
      .catch((error) => {
        alert('Something Went Wrong');
      });
  };

  const editText = (e) => {
    e.preventDefault();
    setEdit(true);
  };
  const saveText = (e) => {
    e.preventDefault();
    if (newText != null) {
      updateText();
    }
    setNewText(null);
  };
  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div className='home_bannerContainer'>
      <h4>{text}</h4>
      {dataSlice?.email && (
        <div className='home_bannerEdit'>
          <button onClick={editText}>Edit</button>
          {edit === true && (
            <div className='home_textEdit'>
              <textarea
                placeholder='Write you message here'
                value={newText}
                onChange={handleChange}
              ></textarea>
              <button onClick={saveText}>Save</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeBanner;
