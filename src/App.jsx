import React, { Component } from 'react';
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';

class App extends Component {
  state = {
    distance:"",
    gender: "female",
    age: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  render() {
    return (
      <>
        <label>Distance</label>
        <input
          onChange={this.onChangeHandler}
          name="distance"
          id="distance"
        ></input>

        <select onChange={this.onChangeHandler} name="gender" id="gender">
          <option value="female">Female</option>
          <options value="male">Male</options>
        </select>

        <label>Age</label>
        <input onChange={this.onChangeHandler} name="age" id="age"></input>
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>
    );
  }
}

export default App;