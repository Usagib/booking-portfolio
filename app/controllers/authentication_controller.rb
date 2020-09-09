class AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate

  def authenticate
    user = User.find_by(email: auth_params[:email])
    auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    response = { auth_token: auth_token, user: user }
    json_response(response, :ok)
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end
