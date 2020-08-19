require 'rails_helper'

RSpec.describe Appointment, type: :model do
  it { should belong_to(:user) }
  it { should belong_to(:service) }
  it { should validate_presence_of(:date) }
  it { should validate_presence_of(:time) }
  it { should validate_presence_of(:description) }
  it { should validate_length_of(:description).is_at_least(15) }
  it { should validate_length_of(:description).is_at_most(150) }
end
