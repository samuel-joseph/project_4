class AddReferenceToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_reference :pokemons, :user, index: true
    add_foreign_key :pokemons, :users

    #add_column :pokemons, :health, :integer
    #t.references :pokemon, null: false, foreign_key: true
  end
end
