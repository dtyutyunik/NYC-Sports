class CreateBasketballs < ActiveRecord::Migration[5.2]
  def change
    create_table :basketballs do |t|
      t.string :propID
      t.string :name
      t.string :location
      t.integer :numCourts
      t.string :accessible
      t.decimal :lat
      t.decimal :long

      t.timestamps
    end
  end
end
