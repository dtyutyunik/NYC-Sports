class Cricket < ApplicationRecord
  has_many :users, through: :favorites
end
