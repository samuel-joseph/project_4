class RemoveHealthFromPokemon < ActiveRecord::Migration[6.0]
  def change

    remove_column :pokemons, :health, :integer
  end
end
