class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_many :appointments, dependent: :destroy

  validates :name, presence: true
  validates :password, presence: true
  validates :email, presence: true

  has_secure_password
end
