import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import NewUser from "./NewUser";
import { getPokemon, getMoves } from "../services/api_helper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownPokemon: null,
      id: ""
    };
  }

  init(ownPokemon) {
    console.log(ownPokemon);
    this.setState({ ownPokemon });
  }

  verifyUser = async () => {
    console.log(localStorage.getItem("id"));
    let response = await getPokemon(localStorage.getItem("id"));
    this.init(response);
    console.log(this.state.ownPokemon[0].name);
    if (this.state.ownPokemon) {
      console.log("WORKING!!!");
      // this.setState({ ownPokemon: response });
      // this.props.history.push("/main");
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
        <Route path="/newuser" render={() => <NewUser />} />
        {this.state.ownPokemon && (
          <ShowPokemon Pokemon={this.state.ownPokemon} />
        )}
      </div>
    );
  }
}

export default withRouter(Main);
