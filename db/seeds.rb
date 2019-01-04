# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

Bocce.destroy_all
Basketball.destroy_all
Cricket.destroy_all
Handball.destroy_all
Pool.destroy_all
Tenni.destroy_all

#Read JSON file
bocceFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Bocce_001.json')
basketballFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Basketball_001.json')
cricketFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Cricket_001.json')
handballFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Handball_001.json')
poolsFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Pools_indoor_001.json')
tennisFile= File.read(Rails.root.to_s + '/SportsJsonFile/DPR_Tennis_001.json')


#parse file into json
bocceHash=JSON.parse(bocceFile)
basketballFileHash=JSON.parse(basketballFile)
cricketFileHash=JSON.parse(cricketFile)
handballFileHash=JSON.parse(handballFile)
poolsFileHash=JSON.parse(poolsFile)
tennisFileHash=JSON.parse(tennisFile)




#scaffold and models creation
#rails g scaffold Bocce propID:string name:string location:string accessible:string lat:decimal long:decimal

#to run
#rails g scaffold Basketball propID:string name:string location:string numCourts:integer accessible:string lat:decimal long:decimal
#rails g scaffold Cricket propID:string name:string location:string numFields:integer lat:decimal long:decimal
#rails g scaffold Handball propID:string name:string location:string numCourts:integer lat:decimal long:decimal
#rails g scaffold Pool propID:string name:string location:string phone:string typeOfPool:string setting:string size:string accessible:string lat:decimal long:decimal recId:string
#rails g scaffold Tenni propID:string name:string location:string phone:string courts:integer indoor_outdoor:string typeOfCourt:string accessible:string info:string lat:decimal long:decimal



#seed database with data
bocceHash.map do |e|
  Bocce.create!(propID: e.values[0], name: e.values[1], location: e.values[2], accessible: e.values[3], lat: e.values[4], long: e.values[5])
end

basketballFileHash.map do |e|
  Basketball.create!(propID: e.values[0], name: e.values[1], location: e.values[2], numCourts: e.values[3], accessible: e.values[4], lat: e.values[5], long: e.values[6])
end

cricketFileHash.map do |e|
  Cricket.create!(propID: e.values[0], name: e.values[1], location: e.values[2], numFields: e.values[3], lat: e.values[4], long: e.values[5])
end

handballFileHash.map do |e|
  Handball.create!(propID: e.values[0], name: e.values[1], location: e.values[2], numCourts: e.values[3], lat: e.values[4], long: e.values[5])
end

poolsFileHash.map do |e|
  Pool.create!(propID: e.values[0], name: e.values[1], location: e.values[2], phone: e.values[3], typeOfPool: e.values[4], setting: e.values[5], size: e.values[6], accessible: e.values[7], lat: e.values[8], long: e.values[9], recId: e.values[10])
end

tennisFileHash.map do |e|
  Tenni.create!(propID: e.values[0], name: e.values[1], location: e.values[2], phone: e.values[3], courts: e.values[4], indoor_outdoor: e.values[5], typeOfCourt: e.values[6], accessible: e.values[7], info: e.values[8], lat: e.values[9], long: e.values[10])
end
