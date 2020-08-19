class Appointment < ApplicationRecord
  belongs_to :service

  validates :date, presence: true
  validates :time, presence: true
  validates :description, presence: true, length: { minimum: 15, maximum: 150 }
end
