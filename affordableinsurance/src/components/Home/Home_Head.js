import React, { useEffect, useState } from 'react';
import './Home_Head.css';

function Home_Head() {
  const [text, setText] = useState([
    'Experts of Insurance',
    'Experienced',
    'Certified',
    'Licenced',
    'Trusted',
  ]);
  const [count, setCount] = useState(0);
  const [loop, setLoop] = useState();
  const [color, setColor] = useState(['#c1040f', '#0a6d8a']);

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
      <h2>Need Or Switch an Insurance Plan ?</h2>
      <p>
        Affordable Insurance of Texas is the right place for you because we are
        <h2 style={{ color: color[count % 2] }}>
          {text[count] != null ? text[count] : 'Local'}
        </h2>
      </p>
    </div>
  );
}

export default Home_Head;
