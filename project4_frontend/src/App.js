import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styles from "./App.css";
import Main from "./components/main.js";

import {
  registerUser,
  verifyUser,
  loginUser,
  getallPokemon
} from "./services/api_helper";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Pokedex from "./components/Pokedex";

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
  };

  changeGreetings = (req) => {
    // console.log("hey")
  //  this.setState({greetings:req})
  }
  
  componentDidMount() {
    verifyUser();
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
                  <Main id={this.state.id} greetings={this.changeGreetings()} />
                </div>
                <div className="box2">
                  <div className="box2a">
                    <h1>
                      {this.state.greetings}{" "}
                      {this.state.currentUser.trainername}
                    </h1>
                  </div>
                  <div className="box2b">
                    <button>
                      <Link to="/pokedex">POKEDEX</Link>
                    </button>
                    <button>
                      <Link to="/profile">PROFILE</Link>
                    </button>
                    <button onClick={this.handleLogout}>Logout!!!</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="box">
                <div className="box1">
                  <Route
                    path="/pokedex"
                    render={() => (
                      <Pokedex greetings={this.changeGreetings()} />
                    )}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <LoginForm
                        greetings={this.changeGreetings()}
                        handleLogin={this.handleLogin}
                      />
                    )}
                  />
                  <Route
                    path="/register"
                    render={() => (
                      <RegisterForm
                        greetings={this.changeGreetings()}
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
