import axios from "axios";

export const registrationHandler = ({
  username,
  email,
  password1,
  password2
}) => {
  return axios
    .post("https://mud-hunt-be.herokuapp.com/api/registration/", {
      username: username,
      password1: password1,
      password2: password2,
      email: email
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
