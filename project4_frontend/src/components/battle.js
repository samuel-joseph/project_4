import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {
  getallPokemon,
  getPokemon,
  update,
  remove
} from "../services/api_helper";

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      npc: null,
      user: null,
      formDataHp: {
        current_health: 0
      },
      formDataId: {
        id: 0
      },
      fainted: false
    };
  }

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    console.log(response);
    return response;
  }

  burry = async id => {
    let resp = await remove(id);
  };

  battle = async () => {
    let id = this.state.user.id;
    let current_health = this.state.formDataHp;
    let npcHealth = this.state.npc.current_health;
    let randomNpcAttack = this.randomFunc(this.state.npc.moves);
    let npcAttack = randomNpcAttack.power;

    let userHealth = this.state.user.current_health;
    let randomUserAttack = this.randomFunc(this.state.user.moves);
    let userAttack = randomUserAttack.power;

    this.props.display(
      `User pokemon use ${randomUserAttack.name} with ${randomUserAttack.power} damage!
      Rival pokemon use ${randomNpcAttack.name} with ${randomNpcAttack.power} damage!`
    );
    npcHealth = npcHealth - userAttack;
    userHealth = userHealth - npcAttack;

    if (npcHealth <= 0 && userHealth <= 0) {
      this.props.display(
        `Both Pokemons have fainted! Send your pokemon to Pokemon Center`
      );
      this.setState({
        npc: { ...this.state.npc, current_health: npcHealth },
        user: { ...this.state.user, current_health: userHealth },
        fainted: true
      });
      this.burry(id);
    } else if (npcHealth < 0 || npcHealth === 0) {
      this.props.display(
        `${this.state.npc.name} fainted...\n${this.state.user.name} win!`
      );
      let resp = await update(id, current_health);
      this.setState({
        npc: { ...this.state.npc, current_health: npcHealth },
        user: { ...this.state.user, current_health: userHealth },
        fainted: true
      });
    } else if (userHealth < 0 || userHealth === 0) {
      this.props.display(
        `${this.state.user.name} fainted...\n${this.state.npc.name} win!`
      );
      this.setState({
        npc: { ...this.state.npc, current_health: npcHealth },
        user: { ...this.state.user, current_health: userHealth },
        fainted: true
      });
      this.burry(id);
    } else {
      this.setState(prevState => ({
        npc: { ...prevState.npc, current_health: npcHealth },
        user: { ...prevState.user, current_health: userHealth },
        formDataHp: {
          ...prevState.formDataHp,
          current_health: userHealth
        }
      }));
    }
    let resp = await update(id, current_health);
  };

  componentDidMount = async () => {
    let resp = await getallPokemon(1);
    let resp1 = await getPokemon(localStorage.getItem("id"));
    console.log(resp1);
    let npc = this.randomFunc(resp);
    this.props.display("BATTLE");
    console.log("NPC");
    console.log(npc);
    let user = resp1[0];
    console.log("USER");
    console.log(user);
    this.setState({ npc, user });
    this.setState(prevState => ({
      formDataId: { ...prevState.formDataId, id: this.state.user.id }
    }));
  };

  render() {
    return (
      <div className="battle">
        {console.log(this.state)}
        <div className="npc">
          {this.state.npc && (
            <div>
              <div className="players">
                <div>
                  <h3>{this.state.npc.name}</h3>
                  <h4>HP: {this.state.npc.current_health}</h4>
                </div>
                <img src={this.state.npc.frontimage} />
              </div>
            </div>
          )}
        </div>
        <div className="user">
          {this.state.user && (
            <div>
              <div className="players">
                <img src={this.state.user.backimage} />
                <div>
                  <h3>{this.state.user.name}</h3>
                  <h4>HP: {this.state.user.current_health}</h4>
                </div>
              </div>
            </div>
          )}
          <div className="fightButton">
            {!this.state.fainted && (
              <button onClick={() => this.battle()} className="fight">
                FIGHT
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Battle);
