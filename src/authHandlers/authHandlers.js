import axios from "axios";

export const getToken = () => {
  return window.localStorage.getItem("token");
};

const setHeaders = () => {
  const token = getToken();

  return {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token a77330ab56b65602d5bd55074813184c1490947a`,//`${token}`,
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
  return axios.get('https://mud-hunt-be.herokuapp.com/api/adv/init/',
  setHeaders())
      .then( (response) => {
          // handle success
          //console.log('succsess', response);
          return response.data;
      })
      .catch((error) => {
          // handle error
          return 'error'
      })
}

export const getMapData = () => {
    return axios.get('https://mud-hunt-be.herokuapp.com/api/adv/rooms/',
    setHeaders())
        .then( (response) => {
            // handle success
            return response.data;
        })
        .catch((error) => {
            // handle error
            return 'error'
        })
}

export const moveToRoom = (direction) => {
  console.log('new direction', direction)
  const data = {
    "direction": direction
  };
  return axios.post('https://mud-hunt-be.herokuapp.com/api/adv/move/', data,
  setHeaders())
      .then( (response) => {
          // handle success
          return response.data;
      })
      .catch((error) => {
          // handle error
          return 'error'
      })
}


// {
//   "name": "testuser",
//   "title": "Et et consequat eu elit in laboris dolor mollit.",
//   "description": "Quis incididunt consectetur nisi laborum mollit voluptate.",
//   "players": []
// }