class CreateBocces < ActiveRecord::Migration[5.2]
  def change
    create_table :bocces do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.string :accessible
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
