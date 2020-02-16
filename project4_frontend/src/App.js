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
      id: ""
    };
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/main");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    const id = currentUser.id;
    this.setState({ currentUser, id });
    this.props.history.push("/main");
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

  // loadPokemon = async () => {
  //   const pokemon = await getallPokemon();
  //   // pokemon.push(await indexPokemon());
  //   this.setState({
  //     pokemon
  //   });
  // };

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
        {this.state.currentUser ? (
          <div>
            <h1>Hello {this.state.currentUser.trainername}</h1>
            <Route path="/main" render={() => <Main />} />
            <Main id={this.state.id} />
            <button onClick={this.handleLogout}>Logout!!!</button>
          </div>
        ) : (
          <nav>
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/pokedex">
              <button>Pokedex</button>
            </Link>
          </nav>
        )}
        <Route path="/pokedex" render={() => <Pokedex />} />
        <Route
          path="/login"
          render={() => <LoginForm handleLogin={this.handleLogin} />}
        />
        <Route
          path="/register"
          render={() => (
            <RegisterForm
              handleRegister={this.handleRegister}
              errorText={this.state.errorText}
            />
          )}
        />
        {/* <Route path="/pokemons" render={() => (
          // <TodoContainer />
        )} /> */}
      </div>
    );
  }
}

export default withRouter(App);
