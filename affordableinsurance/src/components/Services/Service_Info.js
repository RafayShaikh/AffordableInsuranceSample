import { SvgIcon } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import './Service_Info.css';
import { selectAppData } from '../../features/appSlice';
import { useSelector } from 'react-redux';
import Typist from 'react-typist';

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
        <p>
          {/*data?.insuranceDescription*/}, 'Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Sed
          euismod nisi porta lorem mollis aliquam. At varius vel pharetra vel
          turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi
          nullam. Fringilla phasellus faucibus scelerisque eleifend donec
          pretium vulputate sapien. Morbi leo urna molestie at elementum eu
          facilisis. Elit sed vulputate mi sit amet mauris commodo. Vestibulum
          morbi blandit cursus risus at ultrices mi tempus imperdiet. Id semper
          risus in hendrerit. Tincidunt id aliquet risus feugiat in ante metus.
          Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
          Fringilla urna porttitor rhoncus dolor purus. Vitae tempus quam
          pellentesque nec. Magna fermentum iaculis eu non diam phasellus
          vestibulum lorem. Facilisi nullam vehicula ipsum a.'
        </p>
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
