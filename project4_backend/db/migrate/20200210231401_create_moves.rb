class CreateMoves < ActiveRecord::Migration[6.0]
  def change
    create_table :moves do |t|
      t.string :name
      t.integer :power
      t.references :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
