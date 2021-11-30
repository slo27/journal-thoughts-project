class MoodsController < ApplicationController
    def index
        render json: Mood.all, status: :ok
    end
    
    def show
        render json: Mood, status: :ok
    end
    
    def create
        new_mood = Mood.create!(mood_params)
        session[:mood_id] = new_mood.id
    end
    
end
