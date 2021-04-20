import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Aboutbios.css';
import { selectAppData } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import Typist from 'react-typist';

function Aboutbios({ match }) {
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const [data, setData] = useState();

  const clickHandler = (url) => {
    history.push(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(dataSlice);
    if (dataSlice?.individualName == null || dataSlice?.individualPic == null || data?.individualDescription) {
      history.push('/about');
    }
  }, []);

  return (
    <div className='about_bioContainer'>
      <div className='about_bioHead'>
        {data?.individualPic}
        <h2>{data?.individualName}</h2>
      </div>
      <div className='about_bioDescription'>
        <article>
          {data?.individualDescription}
        </article>
      </div>






    </div>
  );
}

export default Aboutbios;
