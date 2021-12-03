class MoodSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :journal_id, :description

  # def users
  #   allusersarray = []
  #   object.users.each do |user|
  #     new_user_hash = {user.id, username: user.username, moods: user.moods}
  #     allusersarray << new_user_hash
  #   end
  #   return allusersarray
  # end
end
