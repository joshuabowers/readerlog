module API
  class AuthenticationController < Base
    skip_before_action :authenticate_request

    def authenticate
      token = User.authenticate( params[:email], params[:password] )

      render json: { token: token }
    rescue StandardError => e
      render json: { error: e.to_s }
    end
  end
end
