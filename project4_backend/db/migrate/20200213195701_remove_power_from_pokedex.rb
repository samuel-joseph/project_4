class RemovePowerFromPokedex < ActiveRecord::Migration[6.0]
  def change

    remove_column :pokedexes, :power, :integer
  end
end
