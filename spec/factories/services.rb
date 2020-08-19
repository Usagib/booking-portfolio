FactoryBot.define do
  factory :service do
    name { Faker::Name.name }
    description { Faker::Quote.matz }
    min_cost { Faker::Number.number(10) }
    max_cost { Faker::Number.number(50) }
    image_url 'https://via.placeholder.com/50'
  end
end
