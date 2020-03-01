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
  marginLeft: '793px',
  color: '#4B3021'
}
const emailInput = {
  padding: '10px',
  marginTop: '',
  color: '#4B3021',
  textAlign: 'center',
  fontSize: '19px',
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
  color: '#4B3021',
  textAlign: 'center',
  fontSize: '19px',
  marginRight: ''
}

const button = {
  fontSize: '15px',
  paddingTop: '13px',
  paddingBottom: '12px',
  paddingLeft: '25px',
  paddingRight: '25px',
  alignItems: 'center',
  display: 'inline-block',
  color: '#4B3021',
  backgroundColor: '#E9C45C',
  borderRadius: '4px',
  margin: '20px'
}


export default LoginForm;
