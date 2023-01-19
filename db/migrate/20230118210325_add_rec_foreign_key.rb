class AddRecForeignKey < ActiveRecord::Migration[6.1]
  def change
    add_column :recommendations, :sleep_record_id, :integer
    add_foreign_key :recommendations, :sleep_records
  end
end
