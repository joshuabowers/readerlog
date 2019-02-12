class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  field :email, type: String
  field :password_digest, type: String

  has_secure_password

  class << self
    # Given the [email, password] tuple, determines if a user exists
    # with those credentials.
    # Returns a JWT representing an authenticated user, or nil
    def authenticate( email, password )
      user = User.find_by( email: email ).try( :authenticate, password )
      fail 'invalid credentials' unless user
      payload = {
        sub: user.id,
        iat: Time.now.to_i,
        exp: 24.hours.from_now.to_i
      }
      JWT.encode( payload, Rails.application.credentials.secret_key_base, 'HS512' )
    rescue Mongoid::Errors::DocumentNotFound
      fail 'invalid credentials'
    end

    # Given headers which might contains a JWT authorization stanza,
    # determines if there exists a valid user.
    # Returns the user referred to by the JWT header, or nil if said
    # user does not exist or if the expiry of the header has occurred.
    def authorize( headers )
      auth_token = decoded_auth_token( headers )
      User.find( auth_token[:sub] )
    end

    private

    def decoded_auth_token( headers )
      auth_header = http_auth_header( headers )
      JWT.decode(
        auth_header, Rails.application.credentials.secret_key_base,
        true, algorithm: 'HS512'
      )[0].with_indifferent_access
    rescue
      fail 'bad authorization token'
    end

    def http_auth_header( headers )
      if headers['Authorization'].present?
        headers['Authorization'].split(' ').last
      else
        fail 'missing token'
      end
    end
  end
end
