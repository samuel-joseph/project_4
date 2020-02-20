import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {
  getallPokemon,
  getPokemon,
  update,
  remove
} from "../services/api_helper";

import MaxHealthBar from "./maxHealthBar";

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
      end: false,
      animate: false,
      animate1: false,
      attack: false,
      attack1: false
    };
  }

  randomFunc(random) {
    let response = random[Math.floor(Math.random() * random.length)];
    return response;
  }

  burry = async id => {
    let resp = await remove(id);
  };

  gameEnd = () => {
    this.props.history.push("/profile");
  };

  battle = async () => {
    let user = localStorage.getItem("trainername");
    let id = this.state.user.id;
    let current_health = this.state.formDataHp;
    let npcHealth = this.state.npc.current_health;
    let randomNpcAttack = this.randomFunc(this.state.npc.moves);
    let npcAttack = randomNpcAttack.power;

    let userHealth = this.state.user.current_health;
    let randomUserAttack = this.randomFunc(this.state.user.moves);
    let userAttack = randomUserAttack.power;

    if (userAttack >= 100) {
      this.setState({ animate: true });
    } else if (userAttack > 0 && userAttack < 100) {
      console.log("work!!!");
      this.setState({ attack: true });
      console.log(this.state.attack);
    }

    if (npcAttack >= 100) {
      this.setState({ animate1: true });
    } else if (npcAttack > 0 && npcAttack < 100) {
      this.setState({ attack1: true });
    }
    console.log(this.state.attack);
    console.log(this.state.attack1)
    this.props.display(
      `${user} pokemon use ${randomUserAttack.name} with ${randomUserAttack.power} damage!
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
        `${user} pokemon use ${randomUserAttack.name} with ${randomUserAttack.power} damage! ${this.state.npc.name} fainted...\n${this.state.user.name} win!`
      );
      setTimeout(
        function() {
          this.setState({
            animate: false,
            animate1: false,
            attack: false,
            attack1: false
          });
        }.bind(this),
        1000
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
        `Rival pokemon use ${randomNpcAttack.name} with ${randomNpcAttack.power} damage! ${this.state.user.name} fainted...\n${this.state.npc.name} win!`
      );
      setTimeout(
        function() {
          this.setState({
            animate: false,
            animate1: false,
            attack: false,
            attack1: false
          });
        }.bind(this),
        1000
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
      let resp = await update(id, current_health);
    }

    setTimeout(
      function() {
        this.setState({
          animate: false,
          animate1: false,
          attack: false,
          attack1: false
        });
      }.bind(this),
      1500
    );
  };

  componentDidMount = async () => {
    let resp = await getallPokemon(1);
    let resp1 = await getPokemon(localStorage.getItem("id"));
    let npc = this.randomFunc(resp);
    this.props.display("BATTLE");
    let user = resp1[0];
    this.setState({ npc, user });
    this.setState(prevState => ({
      formDataId: { ...prevState.formDataId, id: this.state.user.id }
    }));
  };

  render() {
    return (
      <div className="battle">
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
                {this.state.animate && (
                  <img
                    className="animate1"
                    src="https://cdn.lowgif.com/full/db22157c47f8c158-gif-photos-flame-images-animated-gif-on-gifer-by-starshaper.gif"
                  />
                )}
                {this.state.attack && (
                  <img
                    className="normal"
                    src="https://www.freepnglogos.com/uploads/explosion/explosion-clipart-explosion-clip-art-vector-clip-art-online-0.png"
                  />
                )}
                <img className="npcImg" src={this.state.npc.frontimage} />
              </div>
            </div>
          )}
        </div>
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
        <div className="user">
          {this.state.user && (
            <div>
              <div className="players2">
                <img className="userImg" src={this.state.user.backimage} />
                {this.state.animate1 && (
                  <img
                    className="animate2"
                    src="https://cdn.lowgif.com/full/db22157c47f8c158-gif-photos-flame-images-animated-gif-on-gifer-by-starshaper.gif"
                  />
                )}
                {this.state.attack1 && (
                  <img
                    className="normal1"
                    src="https://www.freepnglogos.com/uploads/explosion/explosion-clipart-explosion-clip-art-vector-clip-art-online-0.png"
                  />
                )}
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
        </div>
      </div>
    );
  }
}

export default withRouter(Battle);
