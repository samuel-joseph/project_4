class PokemonUser < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_user do |t|
      t.references :user_id
      t.references :pokemon_id
      end
  end

  def down
    drop_table :pokemon_user
  end
end
