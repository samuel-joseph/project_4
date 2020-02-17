import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { options } from "../services/api_helper";
import { storePoke, updateName } from "../services/api_helper";
import { Link, withRouter } from "react-router-dom";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
      options: [],
      id: "",
      formData: {
        name: ""
      },
      value: "",
      moves: {
        name: "",
        power: ""
      }
    };
  }

  storePokemon(chosenPokemon) {
    this.setState({ pokemon: chosenPokemon });
    this.storeData(chosenPokemon);
  }

  storeData = async chosenPokemon => {
    const id = await storePoke(chosenPokemon);
    this.setState({ id });
  };

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    return response;
  }

  handleSubmit = async event => {
    event.preventDefault();
    let name = this.state.formData;
    let id = this.state.id;
    let resp = await updateName(id, name);
    this.props.history.push("/main");
  };

  componentDidMount = async () => {
    console.log("AM I HERE")
    console.log(this.state.pokemon);
    let response = await options();
    let newPokemon = [];
    for (let i = 0; i < 3; i++) {
      {
        newPokemon.push(this.randomFunc(response));
      }
    }
    this.setState({ options: newPokemon });
  };

  handleChange = event => {
    let value = event.target.value;
    console.log(value);
    let name = event.target.name;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div>
        <div>
          {!this.state.pokemon && (
            <div>
              {console.log("HELLO")}
              {this.state.options.map(pokemon => (
                <>
                  <img
                    onClick={() => this.storePokemon(pokemon)}
                    src="https://i7.pngguru.com/preview/575/483/741/pokemon-ranger-pokemon-omega-ruby-and-alpha-sapphire-poke-ball-sprite-sprite.jpg"
                  />
                </>
              ))}
            </div>
          )}
          {this.state.pokemon && (
            <>
              <img src={this.state.pokemon.frontimage} />
              <form onSubmit={this.handleSubmit}>
                <h5>Name of your Pokemon</h5>
                <input
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  placeholder="name"
                />
                <input type="submit" />
              </form>
              <div>
                {this.state.pokemon.moves.map(move => (
                  <p>
                    {move.name}:{move.power}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NewUser);
