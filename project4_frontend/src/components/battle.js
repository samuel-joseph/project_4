import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { getallPokemon } from "../services/api_helper";

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
    let npc = this.randomFunc(resp)
    console.log(npc)
  };

  render() {
    return <div></div>;
  }
}

export default withRouter(Battle);
