class Handball < ApplicationRecord
  has_many :users, through: :favorites
end
