class ImageSerializer < ActiveModel::Serializer
  attributes :id, :url, :description, :project_id
end
