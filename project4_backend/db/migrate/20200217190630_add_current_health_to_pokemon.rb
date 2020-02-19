class AddCurrentHealthToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :current_health, :integer
  end
end
