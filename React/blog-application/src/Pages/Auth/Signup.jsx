import { createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";


import Input from "../../components/Input";
import Button from "../../components/Button";
import { auth, db } from "../../firebase/config.js";
import { Link } from "react-router-dom";
import SignInWithGoogle from "../../components/SignInWithGoogle.jsx";


 export const saveDataIntoDB = async (name = "", data) => {
      console.log(data);
    //  return  
    try {
  await setDoc(doc(db, "users", data.uid), {
    email : data.email,
    name : data.displayName ? data.displayName : name,
    photoUrl : data.photoURL ? data.photoURL : ""
  });
  


    } catch (error) {
      toast.error(error.message);
    }
  } 


const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (key, value) => {
    console.log("handler working...", value);
    // setForm()

    setForm((prev) => ({ ...prev, [key]: value }));
  };



  const signupHandler = async () => {
    console.log("singnup function chalaa", form);

    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );

      console.log(response);

      if (response.user) {
        saveDataIntoDB(form.username , response.user)
        toast.success("user signup successfully!");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (
        error.message == "Firebase: Error (auth/email-already-in-use)" ||
        error.code == "auth/email-already-in-use"
      ) {
        toast.error("Email already Exist!");
      }
    }
  };





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
          //   sx={{
          //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          //  }}
        >
          <h1 className="text-3xl font-bold text-center mb-3">Signup Page</h1>

          <Box>
            <Input
              handler={handleInputChange}
              label={"Enter your username"}
              type={"username"}
              value={form.username}
            />
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
                handler={signupWithGoogleHandler}
                title={"Signup with Google"}
                icon={<GoogleIcon />}
              />
            </Box> */}

            <SignInWithGoogle title={"Sign up with google"} />
            <Box sx={{

            }} className="flex justify-center ">
              <Button handler={signupHandler} title={"Signup"} />

            </Box>
              <Link to={"/login"}><Typography sx={{
                margin: "10px 0px"
              }} className="text-center ">Go to login page</Typography></Link>
          </Box>
        </Paper>
      </Box>

      <ToastContainer />
    </>
  );
};

export default Signup;
