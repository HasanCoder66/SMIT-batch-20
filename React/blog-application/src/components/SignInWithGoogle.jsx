import React from 'react'
import Button from '../components/Button'
import { auth } from '../firebase/config.js';
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { saveDataIntoDB } from '../Pages/Auth/Signup.jsx';

const SignInWithGoogle = ({title}) => {


      const signupWithGoogleHandler = async () => {
    console.log("signup chl raha haii..");

    try {
      const provider = new GoogleAuthProvider();
      let response = await signInWithPopup(auth, provider);

      console.log(response);

      saveDataIntoDB("",response.user)
      if (response.user) {
        toast.success("user signup successfully!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
     <Box sx={{}} className="flex justify-center mb-5 ">
              
              <Button
                handler={signupWithGoogleHandler}
                title={title}
                icon={<GoogleIcon />}
              />
            </Box>
  )
}

export default SignInWithGoogle