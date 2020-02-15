import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import NewUser from "./NewUser";
import { getPokemon } from "../services/api_helper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownPokemon: null,
      id: ""
    };
  }

  verifyUser = async () => {
    console.log(this.props.id);
    let response = await getPokemon(this.props.id);
    console.log(response);
    if (this.state.ownPokemon) {
      console.log("WORKING!!!");
      this.setState({ ownPokemon: response });
      this.props.history.push("/main");
    } else {
      this.props.history.push("/newuser");
    }
  };

  componentDidMount() {
    this.setState({ id: this.props.id });
    this.verifyUser();
  }

  onClick = chosen => {
    this.setState({ ownPokemon: [...this.state.ownPokemon, chosen] });
    console.log(this.state.ownPokemon);
  };

  render() {
    return (
      <div className="main">
        {this.props.id}
        <Route path="/newuser" render={() => <NewUser />} />
        {this.state.ownPokemon && (
          <div>
            <h3>{this.state.ownPokemon[0].name}</h3>
            <img src={this.state.ownPokemon[0].frontimage} />
            <p>{this.state}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Main);
