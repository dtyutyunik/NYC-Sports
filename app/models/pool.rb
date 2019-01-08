class Pool < ApplicationRecord
  has_many :User, through: :Favorite
end
