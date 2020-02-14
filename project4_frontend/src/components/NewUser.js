import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { getallPokemon } from "../services/api_helper";
import { storePokemon } from "../services/api_helper";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
      options: []
    };
  }

  storePokemon(chosenPokemon) {
    this.setState({ pokemon: chosenPokemon });
    this.storeData(chosenPokemon);
  }

  storeData = async chosenPokemon => {
    const response = await storePokemon(chosenPokemon);
    console.log(response);
  };

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    return response;
  }

  componentDidMount = async () => {
    console.log(this.state.pokemon);
    let response = await getallPokemon();
    let newPokemon = [];
    for (let i = 0; i < 3; i++) {
      {
        newPokemon.push(this.randomFunc(response));
      }
    }

    this.setState({ options: newPokemon });
    console.log(this.state.options);
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.pokemon && (
            <div>
              {this.state.options.map(pokemon => (
                <img
                  onClick={() => this.storePokemon(pokemon)}
                  src="https://i7.pngguru.com/preview/575/483/741/pokemon-ranger-pokemon-omega-ruby-and-alpha-sapphire-poke-ball-sprite-sprite.jpg"
                />
              ))}
            </div>
          )}
          {this.state.pokemon && (
            <>
              {console.log(this.state.pokemon)}
              <p>{this.state.pokemon.name}</p>
              <img src={this.state.pokemon.frontimage} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default NewUser;
