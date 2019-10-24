import axios from 'axios'

// function axiosWithAuth () {
//     // const token = localStorage.getItem('authorization')
//     //     ? localStorage.getItem('authorization')
//     //     : 'false';
//     const token = 'a77330ab56b65602d5bd55074813184c1490947a'
//     const instance = axios.create({
//         headers: {
//             authorization: token,
//             Referer: 'https://mud-hunt-be.herokuapp.com'
//         },
//     });
//     return instance;
// }


export const getRoomData = () => {
    axios.get('https://mud-hunt-be.herokuapp.com/api/adv/init/')
        .then( (response) => {
            // handle success
            return response;
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
}