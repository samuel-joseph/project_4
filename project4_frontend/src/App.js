import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styles from "./App.css";
import Main from "./components/main.js";

import {
  registerUser,
  verifyUser,
  loginUser,
  pokedex
} from "./services/api_helper";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trainername: "",
      password: "",
      currentUser: null,
      errorText: "",
      pokemon: null
    };
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/trainername");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log(this.state.loginData);
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    console.log(this.state.pokemon);
    this.props.history.push("/pokedex");
  };

  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("trainername");
  };

  loadPokemon = async () => {
    const pokemon = await pokedex();
    // pokemon.push(await indexPokemon());
    this.setState({
      pokemon
    });
  };

  componentDidMount() {
    verifyUser();
    this.loadPokemon();
    if (localStorage.getItem("authToken")) {
      // const name = localStorage.getItem('name')
      const trainername = localStorage.getItem("trainername");
      // const pokemon = localStorage.getItem('pokemon')
      const user = { trainername };
      user &&
        this.setState({
          currentUser: user
        });
      console.log(this.state.pokemon);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.currentUser ? (
          <div>
            <h1>Hello {this.state.currentUser.trainername}</h1>
            {console.log(this.state.pokemon)}

            {/* <div>{this.state.pokemon.map(data => <div>{data.data.name}</div>)}</div> */}

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
          </nav>
        )}
        <Route
          path="/pokemons"
          render={() => <Main pokedex={this.state.pokemon} />}
        ></Route>
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
