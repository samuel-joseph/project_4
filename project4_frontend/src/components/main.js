import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import NewUser from './NewUser';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownPokemon: null
    };
  }

  verifyUser = () => {
    if (this.state.ownPokemon) {
    } else {
      this.props.history.push("/newuser");
    }
  };

  componentDidMount() {
    this.verifyUser();
  }

  onClick = chosen => {
    this.setState({ ownPokemon: [...this.state.ownPokemon, chosen] });
    console.log(this.state.ownPokemon);
  };

  render() {
    console.log(this.state.pokemon);
    return (
      <div className="main">
      <Route path="/newuser" render={() => <NewUser />} />
      </div>
    );
  }
}

export default withRouter(Main);
