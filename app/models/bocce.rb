class Bocce < ApplicationRecord
  has_many :users, through: :favorites
end
