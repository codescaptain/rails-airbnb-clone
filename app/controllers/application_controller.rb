class ApplicationController < ActionController::Base
  rescue_from ::ActiveRecord::RecordNotFound, with: :record_not_found

  protected

  def record_not_found(exception)
    render json: {error: exception.message}.to_json, status: 404
  end

end
