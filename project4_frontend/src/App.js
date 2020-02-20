import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styles from "./App.css";
import Main from "./components/main.js";

import {
  registerUser,
  verifyUser,
  loginUser,
  updateName
} from "./services/api_helper";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Pokedex from "./components/Pokedex";
import Welcome from "./components/welcome";
import Battle from "./components/battle";
import Credits from "./components/credits";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      currentUser: null,
      errorText: "",
      pokemon: null,
      id: "",
      greetings: "",
      formData: {
        trainername: "",
        password: ""
      },
      isClicked: false
    };
  }

  reloadReg = (trainername, password) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData, trainername }
    }));
    this.setState(prevState => ({
      formData: { ...prevState.formData, password }
    }));
  };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const regData = await registerUser(registerData);
    const trainername = regData.trainername;
    const password = regData.password;
    const formData = this.state.regData;
    const id = this.state.id;
    this.reloadReg(trainername, password);
    const currentUser = await loginUser(this.state.formData);
    this.setState({
      currentUser,
      id
    });
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    const id = currentUser.id;
    this.setState({ currentUser, id });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("trainername");
    localStorage.removeItem("id");
    this.props.history.push("/welcome");
  };

  changeGreetings(greetings) {
    this.setState({ greetings });
  }

  componentDidMount() {
    verifyUser();
    this.changeGreetings("WELCOME TRAINER!");
    // this.loadPokemon();
    if (localStorage.getItem("authToken")) {
      const trainername = localStorage.getItem("trainername");
      const user = { trainername };
      user &&
        this.setState({
          currentUser: user
        });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App1">
          <div className="App2">
            {this.state.currentUser ? (
              <div className="box">
                <div className="box1">
                  <Route
                    path="/main"
                    render={() => (
                      <Main display={e => this.changeGreetings(e)} />
                    )}
                  />
                  <Route
                    path="/battle"
                    render={() => (
                      <Battle display={e => this.changeGreetings(e)} />
                    )}
                  />
                  <Main
                    id={this.state.id}
                    greetings={e => this.changeGreetings(e)}
                  />
                </div>
                <div className="box2">
                  <div className="box2a">
                    <h5 className="greetings">{this.state.greetings}</h5>
                  </div>
                  <div className="box2b">
                    <button>
                      <Link to="/battle">
                        <button className="options">BATTLE</button>
                      </Link>
                    </button>
                    <button>
                      <Link to="/pokedex">
                        <button className="options">POKEDEX</button>
                      </Link>
                    </button>
                    <button>
                      <Link to="/profile">
                        <button className="options">PROFILE</button>
                      </Link>
                    </button>
                    <button onClick={this.handleLogout} className="options">
                      LOGOUT
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="box1">
                  {/* <Welcome /> */}
                  <Route
                    path="/pokedex"
                    render={() => (
                      <Pokedex display={e => this.changeGreetings(e)} />
                    )}
                  />
                  <Route path="/credits" render={() => <Credits />} />
                  <Route
                    path="/login"
                    render={() => (
                      <LoginForm
                        display={e => this.changeGreetings(e)}
                        handleLogin={this.handleLogin}
                      />
                    )}
                  />
                  <Route
                    path="/register"
                    render={() => (
                      <RegisterForm
                        display={e => this.changeGreetings(e)}
                        handleRegister={this.handleRegister}
                        errorText={this.state.errorText}
                      />
                    )}
                  />
                </div>
                <div className="box2">
                  <div className="box2a"></div>
                  <div className="box2b">
                    <Link to="/register">
                      <button>Register</button>
                    </Link>
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                    <Link to="/pokedex">
                      <button>Pokedex</button>
                    </Link>
                    <Link to="/credits">
                      <button>Credits</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="gamejoe">
            <h1 className="white">
              GAME JOE <span className="red">C</span>
              <span className="purple">O</span>
              <span className="green">L</span>
              <span className="yellow">O</span>
              <span className="blue">R</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
