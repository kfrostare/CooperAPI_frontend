import React, { Component } from 'react';

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <button id="login">Login</button>
        <DisplayCooperResult
        distance={this.state.distance}
        gender={this.state.gender}
        age={this.state.age}
        />
        <button id="login">Login</button>
        <LoginForm />
      </>
    );
  }
}

export default App;