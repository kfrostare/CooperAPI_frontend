import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login-form">
      <label style={email}>Email</label>
      <input name="email" type="email" id="email" style={emailInput}></input>

      <label style={password}>Password</label>
      <input name="password" type="password" id="password" style={passwordInput}></input>
      <button id="submit" style={button}>Submit</button>
    </form>
  );
};

//inline styling
//inline styling
const email = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center',
  marginTop: '',
  marginLeft: '850px'
}
const emailInput = {
  padding: '10px',
  marginTop: '',

}

const password = {
  fontSize: '25px',
  padding: '25px',
  alignItems: 'center',
  marginTop: '',
  marginLeft: ''

}
const passwordInput = {
  padding: '10px',
  marginTop: '50px',
  marginRight: '20px'

}

const button = {
  fontSize: '15px',
  padding: '10px',
  alignItems: 'center',
  display: 'inline-block'
}


export default LoginForm;
