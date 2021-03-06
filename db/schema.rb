# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_08_174622) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "basketballs", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.integer "numCourts"
    t.string "accessible"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bocces", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.string "accessible"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "crickets", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.integer "numFields"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "basketball_id"
    t.bigint "handball_id"
    t.bigint "bocce_id"
    t.bigint "cricket_id"
    t.bigint "pool_id"
    t.bigint "tenni_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["basketball_id"], name: "index_favorites_on_basketball_id"
    t.index ["bocce_id"], name: "index_favorites_on_bocce_id"
    t.index ["cricket_id"], name: "index_favorites_on_cricket_id"
    t.index ["handball_id"], name: "index_favorites_on_handball_id"
    t.index ["pool_id"], name: "index_favorites_on_pool_id"
    t.index ["tenni_id"], name: "index_favorites_on_tenni_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "handballs", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.integer "numCourts"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pools", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.string "phone"
    t.string "typeOfPool"
    t.string "setting"
    t.string "size"
    t.string "accessible"
    t.decimal "lat"
    t.decimal "long"
    t.string "recId"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tennis", force: :cascade do |t|
    t.string "propID"
    t.string "name"
    t.string "location"
    t.string "phone"
    t.integer "courts"
    t.string "indoor_outdoor"
    t.string "typeOfCourt"
    t.string "accessible"
    t.string "info"
    t.decimal "lat"
    t.decimal "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "email"
    t.string "profile_pic"
    t.string "sport_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "favorites", "basketballs"
  add_foreign_key "favorites", "bocces"
  add_foreign_key "favorites", "crickets"
  add_foreign_key "favorites", "handballs"
  add_foreign_key "favorites", "pools"
  add_foreign_key "favorites", "tennis"
  add_foreign_key "favorites", "users"
end
