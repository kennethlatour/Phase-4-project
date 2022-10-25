class User < ApplicationRecord
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8, maximum: 24}
    validates :password, confirmation: true

    has_many :user_projects
    has_many :projects, through: :user_projects
    before_save :downcase_email
    has_secure_password


    private

  def downcase_email
    self.email = email.downcase
  end

end
