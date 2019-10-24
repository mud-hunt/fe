import axios from "axios";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

const setHeaders = () => {
  const token = getToken();

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      Referer: "https://mud-hunt-be.herokuapp.com"
      // "Access-Control-Allow-Origin": "https://mud-hunt-be.herokuapp.com"
    }
  };
};

export const registrationHandler = ({ username, password1, password2 }) => {
  return axios
    .post(
      "https://mud-hunt-be.herokuapp.com/api/registration/",
      {
        username,
        password1,
        password2
      },
      setHeaders()
    )
    .then(response => {
      if (response && response.statusText === "OK") {
        const token = response.data.key;
        localStorage.setItem("token", token);
        return response;
      }
    })
    .catch(error => {
      console.log(error);
      // throw error;
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
      console.log(error);
      throw error;
    });
};
