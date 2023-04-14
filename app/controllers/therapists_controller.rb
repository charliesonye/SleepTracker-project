class TherapistsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        render json: user.therapists
    end
end
