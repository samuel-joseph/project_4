import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      ownPokemon: []
    };
  }

  componentDidMount() {
    let pokemon = this.props.pokedex;
    this.setState({
      pokemon
    });
    console.log(this.props.pokedex);
    // console.log(this.state.pokemon);
  }

  onClick = (chosen) => {
    this.setState({ ownPokemon: [...this.state.ownPokemon, chosen] })
    console.log(this.state.ownPokemon)
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <div className="main">
        <h2>MAIN</h2>
        {this.state.pokemon && (
          <>
            {this.state.pokemon.map(data => (
              <button onClick={()=>this.onClick(data)}>
                <h4>{data.name}</h4>
                <img src={data.frontimage} />
              </button>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Main);
