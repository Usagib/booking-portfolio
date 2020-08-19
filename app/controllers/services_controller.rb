class ServicesController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def service_params
    params.permit(:name, :description, :max_cost, :min_cost)
  end

  def set_service
    @service = Service.find(params[:id])
  end
end
