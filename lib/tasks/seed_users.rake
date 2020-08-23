task seed_users: :environment do

  User.create(
      name: 'Allison',
      email: 'test1@test.com',
      company: 'Testla',
      password: 'password',
      password_confirmation: 'password',
  )

  User.create(
      name: 'Joe',
      email: 'test2@test.com',
      company: 'Testla',
      password: 'password',
      password_confirmation: 'password',
  )

  User.create(
      name: 'Craig',
      email: 'test3@test.com',
      company: 'Testla',
      password: 'password',
      password_confirmation: 'password',
  )

  puts 'complete'
end
