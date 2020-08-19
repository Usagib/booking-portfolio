class ServicesController < ApplicationController
  before_action :set_service, only[:show, :update, :destroy]

  def index
    @services = Service.all
    render json: @services, status: :ok
  end

  def show
    render json: @service, status: :ok
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      render json: @service, status :created
    else
      render json: @service, status :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
  end

  private
  def service_params
    params.permit(:name, :description, :max_cost, :min_cost)
  end

  def set_service
    @service = Service.find(params[:id])
  end
end
