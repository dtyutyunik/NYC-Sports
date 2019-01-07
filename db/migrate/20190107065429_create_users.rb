class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :email
      t.string :profile_pic
      t.string :sport_type

      t.timestamps
    end
  end
end
