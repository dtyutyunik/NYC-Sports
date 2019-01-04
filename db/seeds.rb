# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'
require 'activerecord-import'

Bocce.destroy_all

bocceFile= File.read('../SportsJsonFile/DPR_Bocce_001.json')
bocceHash=JSON.parse(bocceFile)
# p bocceHash.map { |e| e.values  }

boccedb=['propID', 'name', 'location', 'accessible', 'lat', 'long', 'rating']
boccedb.each_with_index do |variable, index|
  p variable
  p index

  end
# Bocce.create!([{
#
#   }])
