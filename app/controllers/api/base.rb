module API
  class Base < ActionController::API
    before_action :authenticate_request
    attr_reader :current_user

    private

    def authenticate_request
      @current_user = User.authorize( request.headers )
    rescue StandardError => e
      render json: { error: 'Not Authorized' }, status: 401
    end
  end
end
