import React, { useEffect, useState } from 'react';
import './Admin.css';
import { auth, db, provider } from '../../firebase';
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
  var email;

  const fetchEmail = async () => {
    await db
      .collection('user')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          email = doc.id;
        });
      });
  };
  async function signIn(e) {
    e.preventDefault();
    fetchEmail();
    await auth
      .signInWithPopup(provider)
      .then((result) => {
       if (result.user.email != email) signOut(e);
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
    window.scrollTo(0, 0);
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
        {error ? <h3>Something Went Wrong Please Try Again</h3> : null}
      </div>
    </div>
  );
}

export default Admin;
