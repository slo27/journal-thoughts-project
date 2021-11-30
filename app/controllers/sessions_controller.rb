class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_data_not_found

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok 
    end

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password]) # if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Username or password not found; try again!" }, status: :unauthorized
        end
    end

    def destroy
        session.destroy
        render status: :no_content
    end
end
