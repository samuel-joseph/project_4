import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getallPokemon, getPokemon } from "../services/api_helper";

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      npc: null,
      user: null
    };
  }

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    console.log(response);
    return response;
  }

  componentDidMount = async () => {
    let resp = await getallPokemon(1);
    let resp1 = await getPokemon(localStorage.getItem("id"));
    let npc = this.randomFunc(resp);
    this.props.display("BATTLE");
    console.log("NPC");
    console.log(npc);
    let user = resp1[0];
    console.log("USER");
    console.log(user);
    this.setState({ npc, user });
  };

  render() {
    return (
      <div className="battle">
        <div className="npc">
          {this.state.npc && (
            <div>
              <h3>{this.state.npc.name}</h3>
              <div className="players">
                <h4>HP: {this.state.npc.health}</h4>
                <img src={this.state.npc.frontimage} />
              </div>
            </div>
          )}
        </div>
        <div className="user">
          {this.state.user && (
            <div>
              <h3>{this.state.user.name}</h3>
              <div className="players">
                <img src={this.state.user.backimage} />
                <h4>HP: {this.state.user.health}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Battle);
