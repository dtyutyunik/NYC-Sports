class CreateCrickets < ActiveRecord::Migration[5.2]
  def change
    create_table :crickets do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.integer :numFields
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
