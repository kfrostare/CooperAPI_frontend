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
  fontSize: '19px',
  padding: '25px',
  paddingTop: '10px',
  alignItems: 'center',
  marginTop: '',
  marginLeft: '850px',
  color: '#4B3021'
}
const emailInput = {
  padding: '10px',
  marginTop: '',
  color: '#4B3021'
}

const password = {
  fontSize: '19px',
  padding: '25px',
  paddingTop: '10px',
  alignItems: 'center',
  marginTop: '',
  marginLeft: '',
  color: '#4B3021'

}
const passwordInput = {
  padding: '10px',
  marginTop: '20px',
  marginRight: '20px',
  color: '#4B3021'

}

const button = {
  fontSize: '15px',
  padding: '10px',
  alignItems: 'center',
  display: 'inline-block',
  color: '#4B3021',
  borderRadius: '4px'
}


export default LoginForm;
