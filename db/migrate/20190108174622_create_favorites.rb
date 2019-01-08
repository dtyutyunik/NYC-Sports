class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.references :user, foreign_key: true
      t.references :basketball, foreign_key: true
      t.references :handball, foreign_key: true
      t.references :bocce, foreign_key: true
      t.references :cricket, foreign_key: true
      t.references :pool, foreign_key: true
      t.references :tenni, foreign_key: true

      t.timestamps
    end
  end
end
