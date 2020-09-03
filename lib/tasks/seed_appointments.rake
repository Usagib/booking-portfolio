task seed_appointments: :environment do
  @user = User.first
  @services = @user.services.first

  @services.appointments.create(
    date: '2020-10-20',
    time: '12:01:00',
    description: 'this is a description'
  )

  @services.appointments.create(
    date: '2020-10-21',
    time: '12:01:00',
    description: 'this is a description'
  )

  @services.appointments.create(
    date: '2020-10-22',
    time: '12:01:00',
    description: 'this is a description'
  )

  puts 'complete'
end
