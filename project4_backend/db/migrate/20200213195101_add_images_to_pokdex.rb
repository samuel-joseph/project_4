class AddImagesToPokdex < ActiveRecord::Migration[6.0]
  def change
    add_column :pokedexes, :frontimage, :string
    add_column :pokedexes, :backimage, :string
    add_column :pokedexes, :level, :integer
    add_column :pokedexes, :health, :integer
  end
end
