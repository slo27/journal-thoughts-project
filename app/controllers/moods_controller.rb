class MoodsController < ApplicationController
    def index
        render json: Mood.all, status: :ok
    end

    def show
        render json: Mood.find(params[:id]), status: :ok
    end

    
    # get /moods/:id
    def show
        user_mood = Mood.find(session[:user_id])
        render json: User.find(user_mood.user_id), status: :ok
    end
    
    def show
        render json: find_mood, status: :ok
    end

    def create
        new_mood = Mood.create!(mood_params)
        session[:mood_id] = new_mood.id 
        render json: new_mood, status: :created
    end

    def update
        this_mood = find_mood
        this_mood.update!(mood_params)
        render json: this_mood, status: :ok
    end

    def destroy
        this_mood = find_mood
        this_mood.destroy
        render status: :no_content
    end

    private

    def find_mood
        Mood.find(params[:id])
    end

    def mood_params
        params.permit(:user_id, :journal_id, :description)
    end

end





# def mood_data_invalid(e) # error_hash
#     render json: { errors: e.record.errors.full_message }, status: :unprocessable_entity
# end

# def mood_data_not_found
#     render json: { error: "Mood not found, please try again."}, status: :not_found
# end