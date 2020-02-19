import React, { Component } from "react";
import { getPokemon, update } from "../services/api_helper";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Pokemon: null,
      formData: {
        current_health: null
      }
    };
  }

  heal = async current_health => {
    this.setState(prevState => ({
      formData: { ...prevState.current_health, current_health }
    }));
    let resp = await update(this.state.Pokemon[0].id, this.state.formData);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let id = this.state.Pokemon[0].id;
    let health = this.state.Pokemon[0].health;
    let formData = this.state.formData;
    let resp = await update(id, formData);
    this.heal(health);
  };

  componentDidMount = async () => {
    let Pokemon = await getPokemon(localStorage.getItem("id"));
    this.setState({ Pokemon });
    this.setState({
      formData: {
        ...this.state.formData,
        current_health: Pokemon.current_health
      }
    });
    this.props.greetings(
      "This is your inventory, make sure to give your Pokemon potion if HP is LOW!"
    );
  };

  render() {
    return (
      <div>
        {this.state.Pokemon && (
          <div className="pokemon">
            {this.state.Pokemon.map(pokemon => (
              <>
                <h1>{pokemon.name}</h1>
                <div className="pokemonContainer">
                  <div className="pokemonDetails">
                    <img src={pokemon.frontimage} />
                    <h4>LV: {pokemon.level}</h4>
                    <h4>
                      HP:{" "}
                      {this.state.formData.current_health
                        ? this.state.formData.current_health
                        : pokemon.current_health}/{pokemon.health}{" "}
                      {pokemon.health > pokemon.current_health && (
                        <img
                          className="potion"
                          src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Potion-512.png"
                          onClick={e => this.handleSubmit(e)}
                        />
                      )}
                    </h4>
                  </div>
                  <div className="pokemonMoves">
                    {pokemon.moves.map(move => (
                      <h4>
                        {move.name}:{move.power}
                      </h4>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Profile);