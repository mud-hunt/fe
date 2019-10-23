import axios from "axios";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

const setHeaders = () => {
  const token = getToken();

  return {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer a77330ab56b65602d5bd55074813184c1490947a`,//`${token}`,
      "Referer": "https://mud-hunt-be.herokuapp.com"
    }
  };
};

export const registrationHandler = ({
  username,
  email,
  password1,
  password2
}) => {
  return axios
    .post("https://mud-hunt-be.herokuapp.com/api/registration/", {
      username,
      password1,
      password2,
      email
    })
    .then(response => {
      console.log(response);
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    })
    .catch(error => {
      console.log(error);
    });
};

export const loginHandler = ({ username, password }) => {
  return axios
    .post("https://mud-hunt-be.herokuapp.com/api/login/", {
      username,
      password
    },
    setHeaders())
    .then(response => {
      console.log(response);
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem("token", token);
      localStorage.setItem("expirationDate", expirationDate);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRoomData = () => {
  axios.defaults.withCredentials = true
  axios.get('https://mud-hunt-be.herokuapp.com/api/adv/init/',
  setHeaders())
      .then( (response) => {
          // handle success
          console.log('succsess');
          return response;
      })
      .catch((error) => {
          // handle error
          console.log('The error is', error);
      })
}
