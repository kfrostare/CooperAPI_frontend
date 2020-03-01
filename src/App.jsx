import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData";
// import Cooper from "./Cooper.jpg";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );

    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let performanceDataIndex;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              style={loginButton}
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message" >{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message" style={message1}>
            Hey tracker - Enter your new score!
            {/* {JSON.parse(sessionStorage.getItem("credentials")).uid} */}
          </p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button
                id="hide-index"
                style={entryButton}
                onClick={() => this.setState({ renderIndex: false })}
              >
                Hide past entries
              </button>
            </>
          )
        } else {
          performanceDataIndex = (
            <button
              id="show-index"
              style={entryButton}
              onClick={() => this.setState({ renderIndex: true })}
            >
              Show past entries
            </button>
          )
        }
        break;
    }
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        {renderLogin}
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() =>
            this.setState({ entrySaved: true, updateIndex: true })
          }
        />
        {performanceDataIndex}
      </>
    );
  }
}

//inline styling
const loginButton = {
  fontSize: '15px',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingTop: '12px',
  paddingBottom: '13px',
  alignItems: 'center',
  display: 'inline-block',
  backgroundColor: '#E9C45C',
  color: '#4B3021',
  borderRadius: '4px'
}

const entryButton = {
  fontSize: '15px',
  marginLeft: '950px',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingTop: '12px',
  paddingBottom: '13px',
  alignItems: 'center',
  display: 'inline-block',
  backgroundColor: '#E9C45C',
  color: '#4B3021',
  borderRadius: '4px'
}

const message1 = {
  fontSize: '45px',
  alignItems: 'center',
  marginLeft: '950px',
  color: '#4B3021'
}

export default App;