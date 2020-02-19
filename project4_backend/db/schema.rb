# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_17_190630) do

  create_table "moves", force: :cascade do |t|
    t.string "name"
    t.integer "power"
    t.integer "pokemon_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pokemon_id"], name: "index_moves_on_pokemon_id"
  end

  create_table "pokemon_user", force: :cascade do |t|
    t.integer "user_id_id"
    t.integer "pokemon_id_id"
    t.index ["pokemon_id_id"], name: "index_pokemon_user_on_pokemon_id_id"
    t.index ["user_id_id"], name: "index_pokemon_user_on_user_id_id"
  end

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "frontimage"
    t.string "backimage"
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "created_by"
    t.integer "health"
    t.integer "user_id"
    t.integer "current_health"
    t.index ["user_id"], name: "index_pokemons_on_user_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.integer "user_id"
    t.integer "pokemon_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pokemon_id"], name: "index_trainers_on_pokemon_id"
    t.index ["user_id"], name: "index_trainers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "trainername"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "moves", "pokemons"
  add_foreign_key "pokemons", "users"
  add_foreign_key "trainers", "pokemons"
  add_foreign_key "trainers", "users"
end
