class Project < ApplicationRecord
    validates :thumbnail, presence: true
    validates :name, presence: true
    validates :color, presence: true

    has_many :user_projects
    has_many :users, through: :user_projects
end
