class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorizer
    return render json: { error: "Please Log in or Sign Up" }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity_response(invalid)
        
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end


end
