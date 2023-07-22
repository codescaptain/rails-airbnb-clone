class Api::UsersByEmailsController < ApplicationController
  def show
    user = User.find_by!(email: params[:email])
    respond_to do |format|
      format.json {
        render json: user.to_json, status: :ok
      }
    end
  end
end
