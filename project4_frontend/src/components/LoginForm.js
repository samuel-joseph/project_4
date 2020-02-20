import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainername: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.props.display("Input your trainername and password then press submit");
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={e => this.props.handleLogin(e, this.state)}>
          <h2>Login!</h2>
          <label htmlFor="trainername">Trainername</label>
          <input
            className="label"
            type="text"
            name="trainername"
            value={this.state.trainername}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            className="label"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
