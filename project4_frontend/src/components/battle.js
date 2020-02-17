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

  componentDidMount = async () => {
    console.log(localStorage.getItem("id"));
    let resp = await getallPokemon();
  };

  render() {
    return <div></div>;
  }
}

export default withRouter(Battle);
