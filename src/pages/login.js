import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { stat } from 'fs';

function Login({ setUser, ...props }) {
  const [state, updateState] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    updateState(e.target.value);
  };
  const handleSubmitSignIn = e => {
    e.preventDefault();

    const credentials = {
      username: state.username,
      password: state.password
    };

    const receivedUser = await loginHandler(credentials)

    if (receivedUser.hasOwnProperty('token')) {
      setUser(getUser());

      props.history.push('/');
    }else {
      throw new Error('Invalid credentials')
    }
  };

  if (getUser()) {
    return <Redirect to="/" />
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login
