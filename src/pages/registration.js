import React, { useState } from 'react';
import axios from 'axios';
import { setHeaders } from '../utils/authenticationHandlers';
import { path } from '../utils/variables';
import RegistrationForm from './registrationForm';

function Registration() {
  const [state, updateState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    createAccount: false
  });

  const handleChange = e => {
    updateState(e.target.value);
  };

  const handleSubmitSignUP = e => {
    e.preventDefault();
    updateState(prevState => {
      return {
        ...prevState,
        createAccount: true
      };
    });

    const credentials = {
      username: state.username,
      password: state.password,
      confirmPassword: state.confirmPassword
    };

    const registrationHandler = async (credentials) => {
      return axios
        .post(`${path.registration}`, credentials, setHeaders())
        .then(res => {
          if (res.data.success) {
            return res.data.message;
          }
        })
        .catch(error => {
          delete error.response.data.errors.status;
          return error.response.data.errors;
        });
    };
    registrationHandler(credentials);
  };

  return (
    <RegistrationForm
      state={state}
      handleSubmitSignUP={handleSubmitSignUP}
      handleChange={handleChange}
    />
  );
}

export default Registration;
