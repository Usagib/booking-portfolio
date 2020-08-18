require 'rails_helper'

RSpec.describe Service, type: :model do
  it { should have_many(:appointments) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:max_cost) }
  it { should validate_presence_of(:min_cost) }
end
