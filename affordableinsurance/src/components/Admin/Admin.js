import React, { useEffect, useState } from 'react';
import './Admin.css';
import { auth, provider } from '../../firebase';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { addUser } from '../../features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppData } from '../../features/appSlice';
import { useHistory } from 'react-router';

function Admin() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const dataSlice = useSelector(selectAppData);
  const history = useHistory();

  /*const fetchEmail = async () => {
    const snapshot = await db.collection('banner').doc('banner_text').get();
    const data = snapshot.data();
    if (!data.exists) {
      setText(data.text);
    } else {
      setText('Welcome 2');
    }
  };*/

  async function signIn(e) {
    e.preventDefault();
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        const data = {
          email: result.user.email,
        };
        dispatch(addUser(data));
      })
      .catch((error) => {
        setError(error);
      });
    history.push('./');
  }
  async function signOut(e) {
    e.preventDefault();
    await auth
      .signOut()
      .then(() => {
        setUser(null);
        const data = {
          email: null,
        };
        dispatch(addUser(data));
      })
      .catch((error) => {
        setError(true);
      });
  }
  useEffect(() => {
    setUser(dataSlice?.email);
  }, []);

  return (
    <div className='admin_page'>
      <div className='admin_caution'>
        <h2>No User Allowed Beyond This Point Except Admin! </h2>
      </div>
      <div className='admin_card'>
        <h3>Hello Admin, Sign In With Google Below</h3>
        <VerifiedUserIcon />
        {!user ? (
          <h1 onClick={signIn}>Sign In</h1>
        ) : (
          <h1 onClick={signOut}>Sign Out</h1>
        )}
      </div>
    </div>
  );
}

export default Admin;
