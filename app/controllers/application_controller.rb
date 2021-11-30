class ApplicationController < ActionController::API
    include ActionController::Cookies

    private
    
    def user_data_not_found
        render json: { error: "User not found, please login or try again." }, status: :not_found
    end
    
end
