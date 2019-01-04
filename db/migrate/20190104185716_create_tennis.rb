class CreateTennis < ActiveRecord::Migration[5.2]
  def change
    create_table :tennis do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.string :phone
      t.integer :courts
      t.string :indoor_outdoor
      t.string :typeOfCourt
      t.string :accessible
      t.string :info
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
