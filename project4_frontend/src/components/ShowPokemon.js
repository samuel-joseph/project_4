import React from "react";

export default function ShowPokemon(props) {
  return (
    <div>
      {props.Pokemon && (
        <div>
          {props.Pokemon.map(pokemon => (
            <div>
              <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.frontimage} />
                <h4>LV: {pokemon.level}</h4>
                <h4>HP: {pokemon.health}</h4>
              </div>
              <div>
                {pokemon.moves.map(move => (
                  <h4>
                    {move.name}:{move.power}
                  </h4>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
