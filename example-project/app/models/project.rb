class Project < ApplicationRecord
    validates :thumbnail, presence: true
    validates :name, presence: true
    validates :description, presence: true

    has_many :user_projects, dependent: :destroy
    has_many :users, through: :user_projects
    has_many :images
end
