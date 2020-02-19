class PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show, :update, :destroy]
  skip_before_action :authorize_request, only: [:public_pokemons]

  def index
    @pokemons = current_user.pokemons
    #json_response(@pokemon)
    #@pokemons = Pokemon.all
    #@pokemons = pokemons.all
    # json_response(@pokemons)
    render json: @pokemons, include: :moves, status: :ok
  end

  def public_pokemons
    @pokemons = Pokemon.all
    render json: @pokemons, include: :moves, status: :ok
  end


  def create
    #@pokemon = Pokemon.create!(pokemon_params)
    #json_response(@pokemon, :created)
    @pokemon = current_user.pokemons.create!(pokemon_params)
    json_response(@pokemon)
  end

  def show
    #render json: @pokemon, include: :moves, status: :ok
    @pokemon = current_user.pokemons
    #@pokemon = Pokemon.all
    #json_response(@pokemon)
    render json: @pokemon, include: :moves, status: :ok
  end

  def update
    @pokemon.update(pokemon_params)
    json_response(status: 'SUCCESS', message: 'updated pokemon', data: @pokemon.name)
  end

  def destroy
    @pokemon.destroy
  end

  private


  def pokemon_params
    #params.require(:pokemon).permit(user_id: [])
    params.permit(:name, :frontimage, :backimage, :level, :health, :current_health)
  end

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end
end
