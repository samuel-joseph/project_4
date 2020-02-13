import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
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

  render() {
    console.log(this.state.pokemon);
    return (
      <div className="main">
        <h2>MAIN</h2>
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

export default withRouter(Main);
