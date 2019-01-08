class Basketball < ApplicationRecord
  has_many :users, through: :favorites
end
