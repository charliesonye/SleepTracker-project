class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :appointment_notes
      t.integer :user_id
      t.integer :therapist_id

      t.timestamps
    end
  end
end
