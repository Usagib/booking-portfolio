require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:services) }
  it { should validate_presence_of(:name) }
  it { should validate_length_of(:name).is_at_most(255) }
  it { should validate_presence_of(:email) }
  # it { should validate_uniqueness_of(:email) }
  it { should validate_length_of(:email).is_at_least(10) }
  it { should validate_length_of(:email).is_at_most(255) }
  it { should validate_presence_of(:password) }
  it { should validate_length_of(:password).is_at_least(8) }
  it { should validate_length_of(:password).is_at_most(255) }

  it { should have_secure_password }
end
