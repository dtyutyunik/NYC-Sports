class Pool < ApplicationRecord
  has_many :users, through: :favorites
end
