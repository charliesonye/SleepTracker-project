class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # skip_before_action :authorizer, only: [:show, :create]
    # before_action :authorizer, only: [:show]
    # def show
    #     user = User.find_by(id: session[:user_id])
    #     render json: user, status: :ok
    # end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error:  'Not Authorized'}, status: :unauthorized
        end
    
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :height, :weight, :username, :password, :password_confirmation)
    end

    # def render_unprocessable_entity_response(invalid)
        
    #     render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end
    
end
