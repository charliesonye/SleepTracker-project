class Appointment < ApplicationRecord
    belongs_to :user
    belongs_to :therapist
    validates :appointment_notes, presence: true
    validates :date, presence: true
    validates :time, presence: true
end
