class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create

  def create
    puts(user_params)
    user = User.create!(user_params)

    auth_token = AuthenticateUser.new(user.trainername, user.password).call
    response = { message: Message.account_created, auth_token: auth_token, user: user_params }
    json_response(response, :created)
  end


  #def login
  #  @user = User.find_by_trainername(params[:trainername])
  #  if @user.authenticate(params[:password])
  #    @user =
  #    token = encode(id: @user.id, name: @user.name)
  #    response={auth_token: token, user: @user}
  #    json_response(response)
  #  else
  #    response = {message: "Unauthorized!"}
  #    json_response(response)
  #  end
  #end
  #


  private

  def user_params
    params.permit(
        :name,
        :trainername,
        :password
    )
  end
end
