import axios from "axios";
import { getToken } from "../helpers/getToken";

const setHeaders = () => {
  const token = getToken();
  if (token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
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

export const sendMessage = (message) => {
  const data = {
    "message": message
  };
  return axios.post('https://mud-hunt-be.herokuapp.com/api/adv/say/', data,
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