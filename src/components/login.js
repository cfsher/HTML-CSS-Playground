import React, { Component } from 'react';

const LoginScreen = (props) => {
  return (
    <div id="login-screen">
      <h1>Access Automation Login</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required/><br/>
        <input
          type="text"
          name="password"
          placeholder="Password"
          required/><br/><br/>
        <input type="submit"/><br/>
      </form>
    </div>
  );
}

export default LoginScreen;
