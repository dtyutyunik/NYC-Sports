class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :bocce, optional: true
  belongs_to :basketball, optional: true
  belongs_to :cricket, optional: true
  belongs_to :handball, optional: true
  belongs_to :pool, optional: true
  belongs_to :tenni, optional: true
  validates_uniqueness_of :user_id, scope: [:basketball_id, :bocce_id, :cricket_id, :handball_id, :pool_id, :tenni_id]
end
