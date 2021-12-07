class JournalsController < ApplicationController
    def index
        render json: Journal.all, status: :ok
    end
    
    def show
        render json: Journal.find(params[:id]), status: :ok
    end

    def show
        user_journal = Journal.find(session[:user_id])
        render json: User.find(user_journal.user_id), status: :ok
    end

    def create
        new_journal = Journal.create!(journal_params)
        session[:journal_id] = new_journal.id
        render json: new_journal, status: :created
    end

    
    private
    
    def find_journal
        Journal.find(params[:id])
    end
    
    def journal_params
        params.permit(:user_id, :timestamps, :content)
    end
    
end






# def update
#     this_journal = find_journal
#     this_journal.update!(journal_params)
#     render json: this_journal, status: :ok
# end

# def destroy
#     this_journal = find_journal
#     this_journal.destroy
#     render status: :no_content
# end

# def journal_data_invalid(e)
#     render json: { errors: e.record.errors.full_messages}, status: :unprocessable_entity
# end

# def journal_data_not_found
#     render json: { error: "Journal not found, please try again."}, status: :not_found
# end