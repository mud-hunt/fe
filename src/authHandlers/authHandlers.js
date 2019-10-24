import axios from "axios";
import { getToken } from "../helpers/getToken";

const setHeaders = () => {
  const token = getToken();
  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`
      }
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
};

export const registrationHandler = ({ username, password1, password2 }) => {
  return axios
    .post("https://mud-hunt-be.herokuapp.com/api/registration/", {
      username,
      password1,
      password2
    })
    .then(response => {
      const token = response.data.key;
      localStorage.setItem("token", token);
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const loginHandler = ({ username, password }) => {
  return axios
    .post(
      "https://mud-hunt-be.herokuapp.com/api/login/",
      {
        username,
        password
      },
      setHeaders()
    )
    .then(response => {
      if (response.status === 200) {
        const token = response.data.key;
        localStorage.setItem("token", token);
        return response;
      }
    })
    .catch(error => {
      throw error;
    });
};
