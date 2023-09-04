import React, { useState } from "react";
import Input from "../Input/input";
import PrimaryButton from "../Button/primary";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSignin = () => {
    if (localStorage.key) JSON.parse(localStorage.getItem("key"));
  };
  return (
    <div className="loginContainer">
      <div>
        <h1>LOGIN HERE</h1>
      </div>
      <div className="input">
        <Input
          onChangeinp={handleChange}
          placeholder="Email"
          name="email"
          value={user.email}
          type="text"
        />
        <Input
          onChangeinp={handleChange}
          placeholder="Password"
          type="password"
          name="password"
          value={user.password}
        />
      </div>
      <PrimaryButton
        handleSignup={handleSignin}
        type="submit"
        children="Login"
      />
    </div>
  );
};

export default Login;
