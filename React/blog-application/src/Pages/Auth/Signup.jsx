import { createUserWithEmailAndPassword } from "firebase/auth";
import { Box, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { auth } from "../../firebase/config.js";

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

  const signupWithGoogleHandler = async () => {
    console.log("signup chl raha haii..");

    try {
      const provider = new GoogleAuthProvider();
      let response = await signInWithPopup(auth, provider);

      console.log(response);

      if (response.user) {
        toast.success("user signup successfully!");
      }
    } catch (error) {
      toast.error(error.message);
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

            <Box sx={{}} className="flex justify-center mb-5 ">
              {/* < /> */}
              <Button
                handler={signupWithGoogleHandler}
                title={"Signup with Google"}
                icon={<GoogleIcon />}
              />
            </Box>
            <Box sx={{}} className="flex justify-center ">
              <Button handler={signupHandler} title={"Signup"} />
            </Box>
          </Box>
        </Paper>
      </Box>

      <ToastContainer />
    </>
  );
};

export default Signup;
