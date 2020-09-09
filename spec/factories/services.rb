FactoryBot.define do
  factory :service do
    name { Faker::Name.name }
    description { Faker::Quote.matz }
    min_cost { Faker::Number.number(digits: 2) }
    max_cost { Faker::Number.number(digits: 3) }
    image_url 'https://via.placeholder.com/50'
  end
end
