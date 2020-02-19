class MovesController < ApplicationController
  before_action :set_pokemon
  before_action :set_pokemon_move , only: [:show, :update, :destroy]

  def index
    json_response(@pokemon.moves)
    # @moves = Move.all
    # render json: @moves
  end

  def show
    json_response(@move)
    #render json: @move
  end

  def create
    #@pokemon = Pokemon.find(params[pokemon_id])
    #@move = @pokemon.move.new(move_params)
    @pokemon.moves.create!(move_params)
  end

  def update
    @move.update(move_params)
    json_response(status: "SUCCESS")
  end

  def destroy
    @move.destroy
    json_response(status: 'SUCCESS', message: 'item deleted successfully.', data: @move.name)
  end

  private

  def move_params
    params.permit(:name, :power)
  end

  def set_pokemon
    @pokemon = Pokemon.find(params[:pokemon_id])
  end

  def set_pokemon_move
    @move = @pokemon.moves.find_by!(id: params[:id]) if @pokemon
  end

end
