class User < ApplicationRecord
  has_secure_password

  has_many :pokemons, foreign_key: :created_by


  validates :name, presence: true
  validates :trainername, uniqueness: true, presence: true
end
