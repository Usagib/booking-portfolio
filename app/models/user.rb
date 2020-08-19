class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_many :services

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :name, presence: true, length: { maximum: 255 }
  validates :password, presence: true, length: { minimum: 8, maximum: 255 }
  validates :email, presence: true, length: { minimum: 10, maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  has_secure_password
end
