class RecommendationsController < ApplicationController

    def index
        recommendations = Recommendation.all
        render json: recommendations
    end
end
