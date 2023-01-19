class User < ApplicationRecord
    has_secure_password
    has_many :sleep_records
    has_many :appointments
    has_many :therapists, through: :appointments

    validates :username, presence: true, uniqueness: true
end

