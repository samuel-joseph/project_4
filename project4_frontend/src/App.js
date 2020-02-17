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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trainername: "",
      password: "",
      currentUser: null,
      errorText: "",
      pokemon: null,
      id: "",
      greetings: ""
    };
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    console.log(`This is the currentUser ${currentUser}`);
    const id = currentUser.id;
    console.log(`This is the id ${id}`);
    this.setState({ currentUser, id });
    this.props.history.push("/main");
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    const id = currentUser.id;
    this.setState({ currentUser, id });
    console.log(this.state.currentUser);
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
    console.log(greetings);
    this.setState({ greetings });
  }

  componentDidMount() {
    verifyUser();
    this.changeGreetings("WHAT IS UP!!");
    console.log(this.state.currentUser);
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
                  <Route path="/main" render={() => <Main />} />
                  <Route
                    path="/battle"
                    render={() => (
                      <Battle display={(e) => this.changeGreetings(e)} />
                    )}
                  />
                  <Main
                    id={this.state.id}
                    // greetings={() => this.changeGreetings()}
                  />
                </div>
                <div className="box2">
                  <div className="box2a">
                    <h5 className="greetings">
                      {this.state.greetings}
                      {/* {this.state.greetings}{" "}
                      {this.state.currentUser.trainername} */}
                    </h5>
                  </div>
                  <div className="box2b">
                    <button>
                      <Link to="/pokedex">POKEDEX</Link>
                    </button>
                    <button>
                      <Link to="/profile">PROFILE</Link>
                    </button>
                    <button>
                      <Link to="/battle">BATTLE</Link>
                    </button>
                    <button onClick={this.handleLogout}>LOGOUT</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="box1">
                  <Welcome />
                  <Route
                    path="/pokedex"
                    render={() => (
                      <Pokedex
                      // greetings={this.changeGreetings()}
                      />
                    )}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <LoginForm
                        // greetings={this.changeGreetings()}
                        handleLogin={this.handleLogin}
                      />
                    )}
                  />
                  <Route
                    path="/register"
                    render={() => (
                      <RegisterForm
                        // greetings={this.changeGreetings()}
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
