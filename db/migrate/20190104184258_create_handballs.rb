class CreateHandballs < ActiveRecord::Migration[5.2]
  def change
    create_table :handballs do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.integer :numCourts
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
