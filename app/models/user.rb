class User < ApplicationRecord
    has_many :moods
    has_many :journals

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' },
    allow_blank: true
end
