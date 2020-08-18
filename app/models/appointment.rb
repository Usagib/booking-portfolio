class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :service

  validates :date, presence: true
  validates :time, presence: true
  validates :description, presence: true
end
