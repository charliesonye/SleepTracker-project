class SleepRecordsController < ApplicationController

    def index
       
        user = User.find_by(id: session[:user_id])
        sleep_records = user.sleep_records
        render json: sleep_records
        
    end

    def create
        sleep_record = SleepRecord.create!(sleep_record_params)
        render json: sleep_record
    end

    def update
        sleep_record = SleepRecord.find_by(id: params[:id])
        sleep_record.update(date: params[:date])
        render json: sleep_record
    end

    def destroy
        sleep_record = SleepRecord.find_by(id: params[:id])
        sleep_record.destroy
        head :no_content
    end

    private

    def sleep_record_params

        params.permit(:disruptor, :recommendation_1, :recommendation_2, :start_sleep, :end_sleep, :date, :user_id)
    end

end
