class PokedexController < ApplicationController
  before_action :set_pokedex, only: [:show, :update, :destroy]

  def index
    @pokedexes = current_user.all
    #json_response(@pokemon)
    #@pokemons = Pokemon.all
    #@pokemons = pokemons.all
    # json_response(@pokemons)
    render json: @pokedexes
  end

  def create
    #@pokemon = Pokemon.create!(pokemon_params)
    #json_response(@pokemon, :created)
    @pokedex = pokedexes.create!(pokedex_params)
    json_response(@pokedex, :created)
  end

  def show
    #json_response(@pokemon)
    @pokedexes
  end

  def update
    @pokedex.update(pokedex_params)
  end

  def destroy
    @pokedex.destroy
  end

  private

  def pokedex_params
    params.permit(:name, :frontimage, :backimage, :level, :health, :current_health)
  end

  def set_pokemon
    @pokedex = Pokedex.find(params[:id])
  end
end