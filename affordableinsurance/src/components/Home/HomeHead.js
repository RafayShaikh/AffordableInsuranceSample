import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import './HomeHead.css';

function HomeHead() {
  const [text, setText] = useState([
    'Experts of Insurance',
    'Experienced',
    'Certified',
    'Licenced',
    'Trusted',
  ]);
  const [count, setCount] = useState(0);
  const [loop, setLoop] = useState();
  const [color, setColor] = useState(['#c52126', '#0b9ecc']);

  useEffect(() => {
    setLoop(
      setInterval(() => {
        if (text.length === count) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
      }, 2000)
    );

    return function cleanup() {
      clearInterval(loop);
    };
  }, [count]);

  return (
    <div className='homeheadtext_container'>
      <Typist avgTypingDelay={55} cursor={{ show: false }}>
        <h2>Affordable Insurance of Texas can save you money!</h2>
      </Typist>

      <div>
        <Typist avgTypingDelay={20} cursor={{ show: false }}>
          Affordable Insurance of Texas is the right place for you because we
          are
        </Typist>
      </div>
      <h2 style={{ color: color[count % 2] }}>
        {text[count] != null ? text[count] : 'Local'}
      </h2>
    </div>
  );
}

export default HomeHead;
