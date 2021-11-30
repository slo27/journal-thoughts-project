class UserSerializer < ActiveModel::Serializer
  has_many :journals
  has_many :moods

  attributes :id, :username, :password_digest, :first_name, :last_name, :email
end
