import axios from 'axios';
import React from 'react'
import Box from '@mui/material/Box';

 export const UserService = (signUpData) => {

    let data = {
        firstName : signUpData.firstName,
        lastName : signUpData.lastName,
        service :"advance",
        email : signUpData.email,
        password :signUpData.password
    }
    try{
      const response =  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
        return response;
    }
    catch(error){
        return error;

    }

}


export const logInService = (logInData) => {

    let data = {
        email : logInData.email,
        password :logInData.password
    }
    try{
      const response =  axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)
        return response;
    }
    catch(error){
        return error;

    }

}

// export const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );



