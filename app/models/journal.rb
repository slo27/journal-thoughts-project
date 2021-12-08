class Journal < ApplicationRecord
    has_many :moods
    belongs_to :user
end
