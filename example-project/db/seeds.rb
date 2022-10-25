# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding!'
# users
user1 = User.create(username: "jsjennings", email: "jordanje@gmail.com", password: "12341234")
user2 = User.create(username: "kenny12", email: "kennyla@gmail.com", password: "454545kl")
user3 = User.create(username: "benkurose1", email: "benkurose45@gmail.com", password: "101010bk")
user4 = User.create(username: "calebsum9", email: "calebsum88@gmail.com", password: "123123cs")

puts 'done seeding'