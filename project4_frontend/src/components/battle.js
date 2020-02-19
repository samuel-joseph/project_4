import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {
  getallPokemon,
  getPokemon,
  update,
  remove
} from "../services/api_helper";

import MaxHealthBar from "./maxHealthBar";

const styles = {
  transition: "transition duration: .5"
};

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1,
      npc: null,
      user: null,
      formDataHp: {
        current_health: 0
      },
      formDataId: {
        id: 0
      },
      fainted: false,
      end: false
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

  gameEnd = () => {
    this.props.history.push("/profile");
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

    this.setState({ opacity: 0 });

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
        npc: { ...this.state.npc, current_health: 0 },
        user: { ...this.state.user, current_health: 0 },
        fainted: true,
        end: true
      });
      this.burry(id);
      this.props.history.push("/newuser");
    } else if (npcHealth < 0 || npcHealth === 0) {
      this.props.display(
        `${this.state.npc.name} fainted...\n${this.state.user.name} win!`
      );

      let resp = await update(id, current_health);
      npcHealth = 0;
      this.setState({
        npc: { ...this.state.npc, current_health: npcHealth },
        user: { ...this.state.user, current_health: userHealth },
        fainted: true,
        end: true
      });
    } else if (userHealth < 0 || userHealth === 0) {
      this.props.display(
        `${this.state.user.name} fainted...\n${this.state.npc.name} win!`
      );
      this.setState({
        npc: { ...this.state.npc, current_health: npcHealth },
        user: { ...this.state.user, current_health: 0 },
        fainted: true
      });
      this.burry(id);
      this.props.history.push("/newuser");
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
              <div className="players1">
                <div className="p1stats">
                  <h3>{this.state.npc.name}</h3>
                  <h4>LV: {this.state.npc.level}</h4>
                  <MaxHealthBar percentage={this.state.npc.current_health} />
                  <h4>
                    HP: {this.state.npc.current_health}/{this.state.npc.health}
                  </h4>
                </div>
                <img className="npcImg" src={this.state.npc.frontimage} />
              </div>
            </div>
          )}
        </div>
        <div className="user">
          {this.state.user && (
            <div>
              <div className="players2">
                <img className="userImg" src={this.state.user.backimage} />
                <img
                  className="animated infinite bounce"
                  src="https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/edd/2015/08/Featured-Image.png"
                />
                <div className="p2stats">
                  <h3>{this.state.user.name}</h3>
                  <h4>LV: {this.state.user.level}</h4>
                  <MaxHealthBar percentage={this.state.user.current_health} />
                  <h4>
                    HP: {this.state.user.current_health}/
                    {this.state.user.health}
                  </h4>
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
            {this.state.end && (
              <button onClick={() => this.gameEnd()} className="fight">
                END
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Battle);
