class User < ApplicationRecord
    has_many :moods
    has_many :journals, through: :moods

    has_secure_password
end
