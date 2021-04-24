import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceInfo.css';
import { selectAppData } from '../../features/appSlice';
import { useSelector } from 'react-redux';

function Service_Info({ match }) {
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();
  const [data, setData] = useState();

  const clickHandler = (url) => {
    history.push(url);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setData(dataSlice);
    if (dataSlice?.insuranceLogo == null || dataSlice?.insuranceName == null) {
      history.push('/services');
    }
  }, []);

  return (
    <div className='service_infoContainer'>
      <div className='service_infoHead'>
        {data?.insuranceLogo}
        <h2>{data?.insuranceName} Insurance</h2>
      </div>
      <div className='service_infoDescription'>
        <p>{data?.InsuranceDescription},</p>
        <div
          className='service_infoButton'
          onClick={() => clickHandler(`${match.url}/` + 'form')}
        >
          Get Covered !
        </div>
      </div>
    </div>
  );
}

export default Service_Info;
