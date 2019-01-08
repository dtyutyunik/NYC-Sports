class Tenni < ApplicationRecord
  has_many :users, through: :favorites
end
