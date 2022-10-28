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
project2 = Project.create(name:'Google', description: 'A search engine to find anything', thumbnail: 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/great-search-engines-612f8f78d1f79-sej-1520x800.jpg', red: 69, green: 34, blue: 195)
project3 = Project.create(name:'munchies', description: 'A yelp improved', thumbnail: 'https://play-lh.googleusercontent.com/n0X5iAO_8ToPhrDQPp4iLyg4D3Yrcb7KtQycs0QQZsKiZsLszLEBBoPdyK7xuqLXpg', red: 22, green: 233, blue: 85)
project4 = Project.create(name:'victory', description: 'Fitness you can track', thumbnail: 'https://post.healthline.com/wp-content/uploads/2021/04/Feel-good-fitness-hub732x549-thumbnail.jpg', red: 22, green: 233, blue: 85)
project5 = Project.create(name:'New Frontier', description: 'Gaming in space', thumbnail: 'https://cdn.sanity.io/images/2yyup5mx/production/d5a915cd9db3444998926f61645b6f83a53aced0-5000x2813.jpg', red: 138, green: 141, blue: 240)

project_user1 = UserProject.create(project: project1, user: user1)
project_user2 = UserProject.create(project: project1, user: user2)
project_user3 = UserProject.create(project: project2, user: user3)
project_user4 = UserProject.create(project: project2, user: user4)
project_user5 = UserProject.create(project: project3, user: user3)
project_user6 = UserProject.create(project: project4, user: user2)
project_user7 = UserProject.create(project: project5, user: user1)
project_user8 = UserProject.create(project: project2, user: user2)
project_user9 = UserProject.create(project: project2, user: user1)
project_user10 = UserProject.create(project: project3, user: user1)

image1 = Image.create(url: "https://www.dogtime.com/assets/uploads/2018/10/wiener-dog-dachshund-costumes-halloween-1-1280x720.jpg", description: "Dog dressed up at a weiner dog", project: project1)
image2 = Image.create(url: "https://i.pinimg.com/736x/33/2b/76/332b76cac7237a858c1eacdd12b28197--halloween-costumes-for-dogs-dog-costumes.jpg", description: "Dog dressed up as a vampire", project: project1 )
image3 = Image.create(url: "https://images3.teeshirtpalace.com/images/productImages/hhd8761903-happy-halloween-dachshund-dog-skeleton-costume--white-yas-garment.jpg?crop=1151,1151,x450,y366&width=1500", description: "Logo", project: project1 )
image3 = Image.create(url: "https://garden.spoonflower.com/c/12106776/p/f/m/RbJLg5UhNHGOJ2-_JQ4hsF6T0iuj8hGB1BDwyB7nLBArptrn1w00K2uIag/Dachshund%20Halloween%20Purple.jpg", description: "Logo", project: project1 )
image4 = Image.create(url: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1", description: "logo", project: project2)
image5 = Image.create(url: "https://competition-forum.com/wp-content/uploads/2021/09/google-76517_1280.png", description: "search bar", project: project2)
image6 = Image.create(url: "https://t3.ftcdn.net/jpg/04/42/53/70/360_F_442537048_5zWvg9dvVOt4X8G7rSBA4wKptwicXtoU.jpg", description: "dark mode", project: project2)
image7 = Image.create(url: "https://media1.popsugar-assets.com/files/thumbor/jmefKaljK9XHATPmPb6l8gdTOA0/419x0:1735x1316/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/10/14/814/n/1922243/caa4c8755da4bf6a07b7c4.52070619_/i/photos-dachshunds-in-halloween-costumes.jpg", description: "weenie dog", project: project1)
image8 = Image.create(url: "https://thisis.dog/wp-content/uploads/2021/10/dachshund-costume-chewy-1024x975.jpg", description: "weenie dog", project: project1)
image9 = Image.create(url: "https://i.ebayimg.com/images/g/u1wAAOSwGp9hauGy/s-l500.jpg", description: "weenie dog", project: project1)
image10 = Image.create(url: "https://www.alphapaw.com/wp-content/uploads/2019/10/photo_2020-11-03_12-38-23.jpg", description: "weenie dog", project: project1)

image11 = Image.create(url: "https://www.denofgeek.com/wp-content/uploads/2020/02/26_moo.jpg", description: "gaming", project: project5)
image12 = Image.create(url: "http://pcmedia.gamespy.com/pc/image/article/103/1030011/gamespys-25-favorite-pc-games-of-the-90s-20091006111956043.jpg", description: "gaming", project: project5)
image13 = Image.create(url: "https://as2.ftcdn.net/v2/jpg/03/67/46/31/1000_F_367463164_4kHjQXaFNEmeHwQFsHxczLenYxQecJ3X.jpg", description: "gaming", project: project5)
image14 = Image.create(url: "https://www.myabandonware.com/media/screenshots/s/skyroads-20c/skyroads_9.png", description: "gaming", project: project5)
image15 = Image.create(url: "https://play-lh.googleusercontent.com/bvFoPkPHXGzJBAwQqJE0vd556ddQaLM5-azx2ckihJzhbW2DSA6joM9YRyIHhserfQ=w240-h480-rw", description: "gaming", project: project5)
image16 = Image.create(url: "https://retrothing.typepad.com/.a/6a00d83452989a69e201156f921190970c-600wi", description: "gaming", project: project5)
image17 = Image.create(url: "https://cdn.dribbble.com/users/2070170/screenshots/5562681/1801.m10.i311.n021.p.c25.567799015-retro-space-arcade-game-pixel-elements.-invaders_-spaceships_-pla.jpg", description: "gaming", project: project5)

image18 = Image.create(url: "https://childrensministryonline.com/wp-content/uploads/2009/05/google_logos_combined_jpg.jpg", description: "gaming", project: project2)
image19 = Image.create(url: "https://live.staticflickr.com/7552/15033465944_bf6a82a3b8_z.jpg", description: "gaming", project: project2)
image20 = Image.create(url: "https://www.crawlerguys.com/wp-content/uploads/2013/10/google-chrome-icon.jpg", description: "gaming", project: project2)
image21 = Image.create(url: "https://elgoog.im/google1998/google-in-1998.png", description: "gaming", project: project2)
image21 = Image.create(url: "https://www.mandatory.com/assets/uploads/2018/10/Google-7.jpg", description: "gaming", project: project2)
image22 = Image.create(url: "https://news-cdn.softpedia.com/images/news2/Old-Bookmarks-Manager-Makes-a-Comeback-in-Google-Chrome-484219-3.jpg", description: "gaming", project: project2)
puts 'done seeding'