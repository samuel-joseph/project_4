import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import styles from './App.css';
import Main from './components/main.js';

import { registerUser, verifyUser, loginUser, indexPokemon } from './services/api_helper';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      trainername: "",
      password: "",
      currentUser: null,
      errorText: "",
      pokemon: ""
    }
  }


  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push('/trainername');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log(this.state.loginData)
    const currentUser = await loginUser(loginData);
    const pokemon = await indexPokemon();
    console.log(pokemon)
    this.setState({ currentUser });
    this.setState({ pokemon })

    console.log(this.state.pokemon)
    this.props.history.push("/pokemons");
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('trainername');
  }


  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      // const name = localStorage.getItem('name')
      const trainername = localStorage.getItem('trainername')
      const pokemon = localStorage.getItem('pokemon')
      const user = { trainername };
      user && this.setState({
        currentUser: user,
        pokemon
      })
      console.log(this.state.pokemon)
    }
  }




  render() {
    return (
      <div className="App">
        {this.state.currentUser ?
          <div>
            <h1>Hello {this.state.currentUser.trainername}</h1>

            <button onClick={this.handleLogout}>Logout!!!</button>
          </div>
          :
          <nav>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </nav>
        }

        <Route path="/login" render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
          />
        )} />
        <Route path="/register" render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            errorText={this.state.errorText}
          />)}
        />
        {/* <Route path="/pokemons" render={() => (
          // <TodoContainer />
        )} /> */}
      </div>
    );
  }
}

export default withRouter(App);
