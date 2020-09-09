task seed_services: :environment do
  @user = User.first

  @user.services.create(
    name: 'IT',
    description: 'this is a description',
    max_cost: 20,
    min_cost: 5
  )

  @user.services.create(
    name: 'IT2',
    description: 'this is a description',
    max_cost: 20,
    min_cost: 5
  )

  @user.services.create(
    name: 'IT3',
    description: 'this is a description',
    max_cost: 20,
    min_cost: 5
  )

  puts 'complete'
end
