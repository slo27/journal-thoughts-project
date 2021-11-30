class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :timestamps, :content
end
