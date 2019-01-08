class Handball < ApplicationRecord
  has_many :User, through: :Favorite
end
