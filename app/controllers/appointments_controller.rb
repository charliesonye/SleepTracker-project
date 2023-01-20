class AppointmentsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        appointments = user.appointments

        render json: appointments, include: :therapist
    end

    def create
        user = User.find_by(id: session[:user_id])
        appointments = user.appointments.create({
            appointment_notes: params[:appointment_notes],
            user_id: user.id,
            therapist_id: rand(Therapist.first.id..Therapist.last.id),
            date: params[:date],
            time: params[:time]
        })
        render json: appointments
    
    end
end
