class CreateTrainers < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers do |t|
      t.references :user, index: true, foreign_key: true
      t.references :pokemon, index: true, foreign_key: true

      t.timestamps
    end
  end
end
