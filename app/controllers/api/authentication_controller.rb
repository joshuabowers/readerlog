module API
  class AuthenticationController < Base
    skip_before_action :authenticate_request

    def authenticate
      token = User.authenticate( params[:email], params[:password] )

      cookies.signed[:jwt] = { value: token, httponly: true }

      render json: { email: params[:email] }
    rescue StandardError => e
      # fail e
      render json: { error: e.to_s }, status: :unauthorized
    end

    def destroy
      cookies.delete(:jwt)
    end
  end
end
