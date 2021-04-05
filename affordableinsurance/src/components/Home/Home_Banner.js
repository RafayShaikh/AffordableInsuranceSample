import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import './Home_Banner.css';

function Home_Banner() {
  const [text, setText] = useState([]);

  const fetchText = async () => {
    const snapshot = await db.collection('banner').doc('banner_text').get();
    const data = snapshot.data();
    if (!data.exists) {
      setText(data.text);
    } else {
      setText('Welcome 2');
    }
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div className='home_bannerContainer'>
      <h4>{text}</h4>
    </div>
  );
}

export default Home_Banner;
