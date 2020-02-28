import React, { Component } from "react";
import Pokedex from "./Pokedex";
import { options } from "../services/api_helper";
import { storePoke, update } from "../services/api_helper";
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
    let resp = await update(id, name);
    this.props.history.push("/main");
  };

  componentDidMount = async () => {
    let response = await options();
    let newPokemon = [];
    for (let i = 0; i < 3; i++) {
      {
        newPokemon.push(this.randomFunc(response));
      }
    }
    this.props.greetings(`Welcome trainer ${localStorage.getItem("trainername")}! Pick a pokeball to start. Good luck!`)
    this.setState({ options: newPokemon });
  };

  handleChange = event => {
    let value = event.target.value;
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
        <div className="lab">
          {!this.state.pokemon && (
            <img
              className="profOak"
              src="https://www.pngkey.com/png/full/268-2685104_click-to-edit-pokemon-professor.png"
            />
          )}
          {!this.state.pokemon && (
            <div className="groupPoke">
              {this.state.options.map(pokemon => (
                <img
                  className="pokeball"
                  onClick={() => this.storePokemon(pokemon)}
                  src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795vtfp2.png"
                />
              ))}
            </div>
          )}

          {this.state.pokemon && (
            <div className="newPokemon">
              <div>
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
              </div>
              <div>
                {this.state.pokemon.moves.map(move => (
                  <p>
                    {move.name}:{move.power}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(NewUser);
