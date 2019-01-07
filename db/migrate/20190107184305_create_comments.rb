class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :name_of_place
      t.string :reviwer
      t.float :rating

      t.timestamps
    end
  end
end
