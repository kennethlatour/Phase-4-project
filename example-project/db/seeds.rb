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

project1 = Project.create(name:'Halloweeny', description: 'Halloween app to buy favorite costumes', thumbnail: 'https://images.squarespace-cdn.com/content/v1/56df092c4c2f851a20d406d2/1566949034695-PPJ439FI9DFRST1VS3T7/AdobeStock_222036280.jpeg?format=1500w', red: 233, green: 125, blue: 1)
project2 = Project.create(name:'Google', description: 'A search engine to find anything!', thumbnail: 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/great-search-engines-612f8f78d1f79-sej-1520x800.jpg', red: 22, green: 233, blue: 85)

project_user1 = UserProject.create(project: project1, user: user1)
project_user2 = UserProject.create(project: project1, user: user2)
project_user3 = UserProject.create(project: project2, user: user3)
project_user4 = UserProject.create(project: project2, user: user4)
puts 'done seeding'