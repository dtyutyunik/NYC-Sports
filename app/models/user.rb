class User < ApplicationRecord
has_many :favorites
has_many :bocces, through: :favorites
has_many :basketballs, through: :favorites
has_many :tennis, through: :favorites
has_many :crickets, through: :favorites
has_many :pools, through: :favorites
has_many :handballs, through: :favorites
has_secure_password


validates :email, presence: true, uniqueness: true


def to_token_payload
    {
        id: id,
        email: email,
        name: name,
        profile_pic: profile_pic,
        sport_type: sport_type
    }
end
end
