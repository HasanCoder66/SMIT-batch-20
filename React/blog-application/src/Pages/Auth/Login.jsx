import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import GoogleIcon from "@mui/icons-material/Google";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { auth } from "../../firebase/config.js";
import { Link } from "react-router-dom";
import SignInWithGoogle from "../../components/SignInWithGoogle.jsx";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    console.log("handler working...", value);
    // setForm()

    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const LoginHandler = async () => {
    console.log("login function chalaa", form);

    try {
      let response = await signInWithEmailAndPassword (
        auth,
        form.email,
        form.password,
      );

      console.log(response);

      if (response.user) {
        toast.success("user Login successfully!");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (
        error.message == "Firebase: Error (auth/invalid-credential)." ||
        error.code == "auth/invalid-credential"
      ) {
        toast.error("Invalid Credentials!");
      }
    }
  };

//   const LoginWithGoogleHandler = async () => {
//     console.log("Login chl raha haii..");

//     try {
//       const provider = new GoogleAuthProvider();
//       let response = await signInWithPopup(auth, provider);

//       console.log(response);

//       if (response.user) {
//         toast.success("user Login successfully!");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            padding: "10px",
            width: "400px",
          }}
        >
          <h1 className="text-3xl font-bold text-center mb-3">Login Page</h1>

          <Box>
            
            <Input
              handler={handleInputChange}
              label={"Enter your Email"}
              type={"email"}
              value={form.email}
            />
            <Input
              handler={handleInputChange}
              label={"Enter your Password"}
              type={"password"}
              value={form.password}
            />

            {/* <Box sx={{}} className="flex justify-center mb-5 ">
              
              <Button
                handler={LoginWithGoogleHandler}
                title={"Login with Google"}
                icon={<GoogleIcon />}
              />
            </Box> */}

            <SignInWithGoogle title="login with google" />
            <Box sx={{}} className="flex justify-center ">
              <Button handler={LoginHandler} title={"Login"} />
            </Box>

             <Link to={"/signup"}><Typography sx={{
                margin: "10px 0px"
              }} className="text-center ">Go to Signup page</Typography></Link>
          </Box>
        </Paper>
      </Box>

      <ToastContainer />
    </>
  );
};

export default Login    ;