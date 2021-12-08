class JournalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :timestamps, :content
  belongs_to :user

  # def parsed_timestamps
  #   object.timestamps
  # end
end
