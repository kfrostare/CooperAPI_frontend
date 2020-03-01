import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login-form" style={label}>
      <label style={label}>Email</label>
      <input name="email" type="email" id="email" style={input}></input>

      <label style={label}>Password</label>
      <input name="password" type="password" id="password" style={input}></input>
      <button id="submit" style={button}>Submit</button>
    </form>
  );
};

//inline styling
const label = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center'
}

const button = {
  fontSize: '15px',
  padding: '10px',
  alignItems: 'center',
  display: 'inline-block'
}

const input = {
  padding: '10px'
}


export default LoginForm;
