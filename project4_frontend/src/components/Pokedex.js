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

  delete = async () => {};

  componentDidMount = async () => {
    const pokemon = await getallPokemon();
    this.setState({ pokemon });
    // this.props.greetings("Pokedex");
  };

  render() {
    return (
      <div className="pokedexmain">
        <h1>POKEDEX</h1>
        <div className="pokedex">
          {console.log(this.state.pokemon)}
          {this.state.pokemon && (
            <>
              {this.state.pokemon.map(data => (
                <div className="inner">
                  <div className="desc">
                    <h4>{data.name}</h4>
                    <img onClick={() => this.delete()} src={data.frontimage} />
                  </div>
                  <div className="moves">
                    <p>Level:{data.level}</p>
                    <p>Health:{data.health}</p>
                    {data.moves.map(move => (
                      <p>
                        {move.name} Damage:{move.power}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Pokedex);
