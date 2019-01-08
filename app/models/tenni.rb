class Tenni < ApplicationRecord
  has_many :User, through: :Favorite
end
