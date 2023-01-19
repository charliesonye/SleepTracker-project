# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recommendation.destroy_all
# Therapist.destroy_all


Recommendation.create(steps: 'Absorbed sunlight today')
Recommendation.create(steps: 'Avoided screen light an hour before bedtime')
Recommendation.create(steps: 'Cut out caffeine 8 hours before bedtime')
Recommendation.create(steps: 'Cooled bedroom temperature between 62 and 68')
Recommendation.create(steps: 'Cut out alcoholic beverages 4 hours before bedtime')
Recommendation.create(steps: 'Avoided nap during the day')
 # ---------------------------------------------------------------------------------------
# Therapist.create( 
#     name: Faker::Name.name,
#     title: 'Cognitive Behavorial Therapist',
#     specialty: 'Cognitive Processing Therapy' 
#     )

# Therapist.create( 
#     name: Faker::Name.name,
#     title: 'Cognitive Behavorial Therapist',
#     specialty: 'Cognitive Therapy' 
#     )  
    
# Therapist.create( 
#     name: Faker::Name.name,
#     title: 'Cognitive Behavorial Therapist',
#     specialty: 'Dialectical Behavior Therapy' 
#     )
# ---------------------------------------------------------------------------------------
# SleepRecord.create(
#     disruptor: 'Stayed up too late',
#     recommendation_1: 'Absorbed sunlight today',
#     recommendation_2: 'Avoided nap during the day',
#     start_sleep: '09:00',
#     end_sleep: '06:30',
#     user_id: '9',
#     date: '01/18/23'

# )

# SleepRecord.create(
#     disruptor: 'Too much noise during resting hours',
#     recommendation_1: 'Cut out caffeine 8 hours before bedtime',
#     recommendation_2: 'Cut out alcoholic beverages 4 hours before bedtime',
#     start_sleep: '10:30',
#     end_sleep: '07:30',
#     user_id: '1',
#     date: '01/17/23'

# )


