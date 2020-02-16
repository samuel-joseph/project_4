import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { getallPokemon } from "../services/api_helper";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null
    };
  }

  componentDidMount = async () => {
    const pokemon = await getallPokemon();
    this.setState({ pokemon });
    console.log(this.state.pokemon);
  };

  render() {
    return (
      <div>
        <h2>POKEDEX</h2>
        {console.log(this.state.pokemon)}
        {this.state.pokemon && (
          <>
            {this.state.pokemon.map(data => (
              <div>
                <h4>{data.name}</h4>
                <img src={data.frontimage} />
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Pokedex);
