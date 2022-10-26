class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :thumbnail, :red, :green, :blue

  has_many :users
end
