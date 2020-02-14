import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { getallPokemon } from "../services/api_helper";

class NewUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: null
    };
  }

  componentDidMount = async () => {
    let response = await getallPokemon();
    let random = response[Math.floor(Math.random() * response.length)];
    console.log(random);
  };

  render() {
    return <div></div>;
  }
}

export default NewUser;
