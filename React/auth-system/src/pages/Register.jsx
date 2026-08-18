import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';



const Register = () => {
 const [form, setForm] = useState({
    email: "",
    password: "",
    username:"",
    age : ""
  });

  const handleChange = (value, field) => {
    console.log("mera function chalaa ->", value);

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const RegisterHandler = () => {
    console.log("Register kerdia user ko...", form);
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
      <Input
        placeholder={"Enter your age"}
        handler={handleChange}
        type={"age"}
      />
      <Input
        placeholder={"Enter your username"}
        handler={handleChange}
        type={"username"}
      />

      <Button title={"Register"} handler={RegisterHandler} />
    </div>
  );
}

export default Register
