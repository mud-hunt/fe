/* eslint-disable strict */
import jwtDecode from 'jwt-decode';

export const setHeaders = () => {
  const token = function() {
    return window.localStorage.getItem('mudHunt');
  };

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  };
};

