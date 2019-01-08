class User < ApplicationRecord
has_many :favorites
has_many :bocces, through: :favorites
has_many :basketballs, through: :favorites
has_many :tennis, through: :favorites
has_many :crickets, through: :favorites
has_many :pools, through: :favorites
has_many :handballs, through: :favorites
has_secure_password

validates :email, presence: true

def to_token_payload
    {
        sub: id,
        email: email
    }
end
end
