import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './App.css';
import Main from './components/main.js';

import { registerUser, verifyUser, loginUser } from './services/api_helper';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
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
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
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
      const name = localStorage.getItem('name')
      const email = localStorage.getItem('trainername')
      const user = { name, email };
      user && this.setState({
        currentUser: user
      })
    }
  }


  render() {
    return (
      <div className="App">
        {this.state.currentUser ?
          <div>
            <h1>Hello {this.state.currentUser.name}</h1>
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

export default App;
