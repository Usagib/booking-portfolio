class ServicesController < ApplicationController
  before_action :set_service, only: %i[show update destroy]

  def index
    @services = @current_user.services
    json_response(@services)
  end

  def show
    json_response(@service)
  end

  def create
    @service = current_user.services.create!(service_params)
    json_response(@service, :created)
  end

  def update
    @service.update(service_params)
    head :no_content
  end

  def destroy
    @service.destroy
    head :no_content
  end

  private

  def service_params
    params.permit(:name, :description, :max_cost, :min_cost)
  end

  def set_service
    @service = Service.find(params[:id])
  end
end
