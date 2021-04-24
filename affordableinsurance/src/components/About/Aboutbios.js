import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Aboutbios.css';
import { selectAppData } from '../../features/appSlice';
import { useSelector } from 'react-redux';

function Aboutbios({ match }) {
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(dataSlice);
    if (
      dataSlice?.individualName == null ||
      dataSlice?.individualPic == null ||
      data?.individualDescription
    ) {
      history.push('/about');
    }
  }, []);

  return (
    <div className='about_bioContainer'>
      <div className='about_bioPic'>{data?.individualPic}</div>
      <div className='about_bioName'>
        <h2>{data?.individualName}</h2>
      </div>
      <div className='about_bioDescription'>
        <article>{data?.individualDescription}</article>
      </div>
    </div>
  );
}

export default Aboutbios;
