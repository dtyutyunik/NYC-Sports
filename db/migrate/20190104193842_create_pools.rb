class CreatePools < ActiveRecord::Migration[5.2]
  def change
    create_table :pools do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.string :phone
      t.string :typeOfPool
      t.string :setting
      t.string :size
      t.string :accessible
      t.decimal :lat
      t.decimal :long
      t.string :recId

      t.timestamps
    end
  end
end
