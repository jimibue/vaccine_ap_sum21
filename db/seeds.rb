# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Hospital.destroy_all

Hospital.create(name:"U of U", address:'123 manin')
Hospital.create(name:"U of Y", address:'321 manin')

Bug.destroy_all

covid = Bug.create(name:'Covid')

covid.vaccines.create(name:'pfizer', maker:'yo')
covid.vaccines.create(name:'moderna', maker:'yo')
covid.vaccines.create(name:'amazon', maker:'yo')


Bug.create(name:'Sars')
Bug.create(name:'MERS')
Bug.create(name:'FLU')
Bug.create(name:'YOYOS')


