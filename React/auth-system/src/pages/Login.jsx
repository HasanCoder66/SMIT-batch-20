import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';



const Login = () => {
 const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, field) => {
    console.log("mera function chalaa ->", value);

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const loginHandler = () => {
    console.log("login kerdia user ko...", form);
  };

  return (
    <div className="shadow-md p-3 rounded-2xl w-[500px] ">
      <Input
        placeholder={"Enter your email address"}
        handler={handleChange}
        type={"email"}
      />
      <Input
        placeholder={"Enter your password"}
        handler={handleChange}
        type={"password"}
      />

      <Button title={"login"} handler={loginHandler} />
    </div>
  );
}

export default Login
