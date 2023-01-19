class SleepRecord < ApplicationRecord
    belongs_to :user
    # has_many :recommendations
    # potentially take out this association
end
