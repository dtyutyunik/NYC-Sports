class CreateBocces < ActiveRecord::Migration[5.2]
  def change
    create_table :bocces do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.string :accessible
      t.float :lat
      t.float :long
      t.float :rating

      t.timestamps
    end
  end
end
