import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { loginUser } from '../services/api_helper';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainername: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
          <h2>Login!</h2>
          <label htmlFor="trainername">Trainername</label>
          <input
            type="text"
            name="trainername"
            value={this.state.trainername}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    )
  }
}