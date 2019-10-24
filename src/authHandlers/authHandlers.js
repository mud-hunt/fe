import axios from "axios";

export const getToken = () => {
  try{
    return window.localStorage.getItem("token");
  }
  catch(err){
    return undefined
  }
};

const setHeaders = () => {
  const token = getToken();
  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,       
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
  console.log(password1, password2, username)
  return axios
    .post("https://mud-hunt-be.herokuapp.com/api/registration/", {
      username,
      password1,
      password2
    })
    .then(response => {
      const token = response.data.key;
      localStorage.setItem("token", token);
    })
    .catch(error => {
      console.log(error);
    });
};

export const loginHandler = ({ username, password }) => {
  console.log(password, username)
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
      const token = response.data.key;
      localStorage.setItem("token", token);
    })
    .catch(error => {
      console.log(error);
    });
};
