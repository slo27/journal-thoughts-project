# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Mood.delete_all
Journal.delete_all

puts "Seeding...🌱🌱🌱"

puts "Seeding Users...😺😺😺"

User.create(username: "Sandy", password: "password")

puts "Seeding Journals...📓📓📓"

# Journal.group("journals.created_at::date")
Journal.create(user_id: 1, timestamps: true, content: "This is my journal... It's going okay.")
Journal.create(user_id: 1, timestamps: true, content: "This is my second entry... It's getting better.")

puts "Seeding Moods...🗰🗰🗰"

Mood.create(user_id: 1, journal_id: 1, description: "Foggy")

puts "Seeding Done! 🌱🌱🌱"