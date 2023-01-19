class CreateSleepRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :sleep_records do |t|
      t.string :disruptor
      t.string :recommendation_1
      t.string :recommendation_2
      t.time :start_sleep
      t.time :end_sleep
      t.integer :user_id

      t.timestamps
    end
  end
end
