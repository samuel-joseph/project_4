import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import NewUser from "./NewUser";
import { getPokemon, getMoves } from "../services/api_helper";
import ShowPokemon from "./ShowPokemon";
import Pokedex from "./Pokedex";

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
    console.log(localStorage.getItem("id"));
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
        <nav>
          <Link to="/pokedex">POKEDEX</Link>
          <Link to="/profile">PROFILE</Link>
        </nav>
        <main>
          <Route path="/pokedex" render={() => <Pokedex />} />
          <Route path="/newuser" render={() => <NewUser />} />
          <Route
            path="/profile"
            render={() => <ShowPokemon Pokemon={this.state.ownPokemon} />}
          />
          {/* {this.state.ownPokemon && (
            <ShowPokemon Pokemon={this.state.ownPokemon} />
          )} */}
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
