class CreateRsvps < ActiveRecord::Migration[7.0]
  def change
    create_table :rsvps do |t|
      t.string :name
      t.string :email
      t.integer :guests
      t.text :message

      t.timestamps
    end
  end
end
