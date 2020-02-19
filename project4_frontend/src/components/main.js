import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import NewUser from "./NewUser";
import { getPokemon, getMoves } from "../services/api_helper";
import Profile from "./Profile";
import Pokedex from "./Pokedex";
import Battle from "./battle";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownPokemon: null,
      id: ""
    };
  }

  componentDidMount = async () => {
    this.setState({ id: this.props.id });
    let ownPokemon = await getPokemon(localStorage.getItem("id"));
    this.setState({ ownPokemon });
    if (ownPokemon.length !== 0 && ownPokemon) {
      this.props.history.push("/profile");
    } else {
      this.props.history.push("/newuser");
    }
  };

  render() {
    return (
      <div className="main">
        <main>
          <Route
            path="/pokedex"
            render={() => (
              <Pokedex
              // greetings={() => this.greetings()}
              />
            )}
          />
          <Route
            path="/newuser"
            render={() => <NewUser
              greetings={e => this.props.greetings(e)} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                greetings={e => this.props.greetings(e)}
                Pokemon={this.state.ownPokemon}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
