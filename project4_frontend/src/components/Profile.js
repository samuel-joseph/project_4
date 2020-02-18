import React from "react";

export default function Profile(props) {
  return (
    <div>
      {props.Pokemon && (
        <div className="pokemon">
          {props.Pokemon.map(pokemon => (
            <>
              <h1>{pokemon.name}</h1>
              <div className="pokemonContainer">
                <div className="pokemonDetails">
                  <img src={pokemon.frontimage} />
                  <h4>LV: {pokemon.level}</h4>
                  <h4>HP: {pokemon.current_health}</h4>
                </div>
                <div className="pokemonMoves">
                  {pokemon.moves.map(move => (
                    <h4>
                      {move.name}:{move.power}
                    </h4>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
