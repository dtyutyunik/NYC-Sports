class CreateFavoriteLists < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_lists do |t|
      t.string :name_of_place
      t.string :location_name
      t.string :comments
      t.float :rating

      t.timestamps
    end
  end
end
