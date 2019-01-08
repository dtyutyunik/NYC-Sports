class Bocce < ApplicationRecord
  has_many :User, through: :Favorite
end
