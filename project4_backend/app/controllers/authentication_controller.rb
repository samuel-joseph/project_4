class AuthenticationController < ApplicationController
  # return auth token once user is authenticated
   skip_before_action :authorize_request, only: :authenticate
  def authenticate
    auth_token =
        AuthenticateUser.new(auth_params[:trainername], auth_params[:password]).call
    user = User.find_by(trainername: auth_params[:trainername])
    #json_response(auth_token: auth_token)
    json_response(auth_token: auth_token, trainername: auth_params[:trainername], user: user)
  end

  private

  def auth_params
    params.permit(:trainername, :password)
  end
end