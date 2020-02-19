class Pokemon < ApplicationRecord
  has_many :moves, dependent: :destroy

  has_many :users


  validates_presence_of :name, :health, :frontimage, :backimage, :level, :created_by, :current_health
end
