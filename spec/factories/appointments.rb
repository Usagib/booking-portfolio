FactoryBot.define do
  factory :appointment do
    date { Faker::Date.forward(days: 30) }
    time { Faker::Time.forward(days: 5,  period: :evening) }
    description { Faker::Quote.matz }
  end
end
