class AddColumnToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :created_by, :string
  end
end
