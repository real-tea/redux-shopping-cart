import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {

  const dispatch = useDispatch();
  
  const Submit = (e) => {
    	e.preventDefault();
      dispatch(authActions.login());
  }
  
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit = {Submit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
