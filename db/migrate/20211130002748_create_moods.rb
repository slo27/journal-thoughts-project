class CreateMoods < ActiveRecord::Migration[6.1]
  def change
    create_table :moods do |t|
      t.integer :user_id
      t.integer :journal_id
      t.string :description

      t.timestamps
    end
  end
end
