class AddHealthToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :health, :integer
  end
end
