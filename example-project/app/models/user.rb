class User < ApplicationRecord
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8, maximum: 24}
    validates :password, confirmation: true

    has_many :user_projects
    has_many :projects, through: :user_projects
end
