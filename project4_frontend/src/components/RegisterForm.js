import React, { Component } from "react";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
    this.props.display("Register and become a trainer!");
  }

  render() {
    return (
      <div className="form">
        {this.props.errorText && <p>{this.props.errorText}</p>}
        <form onSubmit={e => this.props.handleRegister(e, this.state)}>
          <h2>Register!</h2>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            className="label"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="trainername">Trainername</label>
          <input
            type="text"
            name="trainername"
            className="label"
            value={this.state.trainername}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            className="label"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="submit">Submit!</button>
        </form>
      </div>
    );
  }
}
