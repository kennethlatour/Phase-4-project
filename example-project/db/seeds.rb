# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Project.destroy_all
UserProject.destroy_all
Image.destroy_all

puts 'seeding!'
# users
user1 = User.create(username: "jsjennings", email: "jordanje@gmail.com", password: "12341234")
user2 = User.create(username: "kenny12", email: "kennyla@gmail.com", password: "454545kl")
user3 = User.create(username: "benkurose1", email: "benkurose45@gmail.com", password: "101010bk")
user4 = User.create(username: "calebsum9", email: "calebsum88@gmail.com", password: "123123cs")

project1 = Project.create(name:'Halloweeny', description: 'Halloween app to buy favorite costumes', thumbnail: 'https://images.squarespace-cdn.com/content/v1/56df092c4c2f851a20d406d2/1566949034695-PPJ439FI9DFRST1VS3T7/AdobeStock_222036280.jpeg?format=1500w', red: 233, green: 125, blue: 1)
project2 = Project.create(name:'Google', description: 'A search engine to find anything', thumbnail: 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/great-search-engines-612f8f78d1f79-sej-1520x800.jpg', red: 22, green: 233, blue: 85)
project3 = Project.create(name:'munchies', description: 'A yelp improved', thumbnail: 'https://play-lh.googleusercontent.com/n0X5iAO_8ToPhrDQPp4iLyg4D3Yrcb7KtQycs0QQZsKiZsLszLEBBoPdyK7xuqLXpg', red: 22, green: 233, blue: 85)
project4 = Project.create(name:'victory', description: 'Fitness you can track', thumbnail: 'https://post.healthline.com/wp-content/uploads/2021/04/Feel-good-fitness-hub732x549-thumbnail.jpg', red: 22, green: 233, blue: 85)
project5 = Project.create(name:'New Frontier', description: 'Gaming in space', thumbnail: 'https://cdn.sanity.io/images/2yyup5mx/production/d5a915cd9db3444998926f61645b6f83a53aced0-5000x2813.jpg', red: 22, green: 233, blue: 85)

project_user1 = UserProject.create(project: project1, user: user1)
project_user2 = UserProject.create(project: project1, user: user2)
project_user3 = UserProject.create(project: project2, user: user3)
project_user4 = UserProject.create(project: project2, user: user4)
project_user5 = UserProject.create(project: project3, user: user3)
project_user6 = UserProject.create(project: project4, user: user2)
project_user7 = UserProject.create(project: project5, user: user1)

image1 = Image.create(url: "https://www.dogtime.com/assets/uploads/2018/10/wiener-dog-dachshund-costumes-halloween-1-1280x720.jpg", description: "Dog dressed up at a weiner dog", project: project1)
image2 = Image.create(url: "https://i.pinimg.com/736x/33/2b/76/332b76cac7237a858c1eacdd12b28197--halloween-costumes-for-dogs-dog-costumes.jpg", description: "Dog dressed up as a vampire", project: project1 )
image3 = Image.create(url: "https://images3.teeshirtpalace.com/images/productImages/hhd8761903-happy-halloween-dachshund-dog-skeleton-costume--white-yas-garment.jpg?crop=1151,1151,x450,y366&width=1500", description: "Logo", project: project1 )
image3 = Image.create(url: "https://garden.spoonflower.com/c/12106776/p/f/m/RbJLg5UhNHGOJ2-_JQ4hsF6T0iuj8hGB1BDwyB7nLBArptrn1w00K2uIag/Dachshund%20Halloween%20Purple.jpg", description: "Logo", project: project1 )
image4 = Image.create(url: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1", description: "logo", project: project2)
image5 = Image.create(url: "https://competition-forum.com/wp-content/uploads/2021/09/google-76517_1280.png", description: "search bar", project: project2)
image6 = Image.create(url: "https://t3.ftcdn.net/jpg/04/42/53/70/360_F_442537048_5zWvg9dvVOt4X8G7rSBA4wKptwicXtoU.jpg", description: "dark mode", project: project2)
puts 'done seeding'