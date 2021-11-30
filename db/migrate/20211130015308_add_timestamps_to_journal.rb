class AddTimestampsToJournal < ActiveRecord::Migration[6.1]
  def change
    add_column :journals, :timestamps, :integer
  end
end
