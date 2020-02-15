import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import NewUser from "./NewUser";
import { getPokemon } from "../services/api_helper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownPokemon: [],
      id: ""
    };
  }

  init(ownPokemon) {
    this.setState({ ownPokemon });
  }

  verifyUser = async () => {
    console.log(localStorage.getItem("id"));
    let response = await getPokemon(localStorage.getItem("id"));
    this.init(response);
    console.log(response);
    if (this.state.ownPokemon.length > 0) {
      console.log("WORKING!!!");
      this.setState({ ownPokemon: response });
      this.props.history.push("/main");
    } else {
      this.props.history.push("/newuser");
    }
  };

  componentDidMount() {
    this.setState({ id: this.props.id });
    this.verifyUser();
  }

  onClick = chosen => {
    this.setState({ ownPokemon: [...this.state.ownPokemon, chosen] });
    console.log(this.state.ownPokemon);
  };

  render() {
    return (
      <div className="main">
        {console.log(this.state.ownPokemon)}
        <Route path="/newuser" render={() => <NewUser />} />
        {this.state.ownPokemon && (
          <>
            {this.state.ownPokemon.map(poke => (
              <div>
                <h3>{poke.name}</h3>
                <img src={poke.frontimage} />
                {/* <div>
                  {poke.moves.map(move => (
                    <p>
                      {move.name}:{move.power}
                    </p>
                  ))}
                </div> */}
              </div>
            ))}
          </>
          // <div>
          //   <h3>{this.state.ownPokemon[0].name}</h3>
          //   <img src={this.state.ownPokemon[0].frontimage} />
          //   <p>{this.state}</p>
          // </div>
        )}
      </div>
    );
  }
}

export default withRouter(Main);
