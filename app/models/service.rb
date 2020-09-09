class Service < ApplicationRecord
  has_many :appointments

  validates :name, presence: true
  validates :description, presence: true
  validates :max_cost, presence: true
  validates :min_cost, presence: true
end
