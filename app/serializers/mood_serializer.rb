class MoodSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :journal_id, :description
end
