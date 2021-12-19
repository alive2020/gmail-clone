import React from 'react';
import './Login.css';
import gmailLogo from './imgs/gmaillogo.jpeg';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={gmailLogo} alt='' />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
