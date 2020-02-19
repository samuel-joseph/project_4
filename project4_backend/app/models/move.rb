class Move < ApplicationRecord
  belongs_to :pokemon

  validates_presence_of :name
end
