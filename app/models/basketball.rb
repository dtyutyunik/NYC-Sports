class Basketball < ApplicationRecord
  has_many :User, through: :Favorite
end
