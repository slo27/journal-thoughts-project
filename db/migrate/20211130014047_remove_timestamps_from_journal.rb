class RemoveTimestampsFromJournal < ActiveRecord::Migration[6.1]
  def change
    remove_column :journals, :timestamps, :integer
  end
end
