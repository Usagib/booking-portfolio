class AppointmentsController < ApplicationController
  before_action :set_service
  before_action :set_service_appointment, only: [:show, :update, :destroy]

  def index
    @appointments = Appointment.all
    json_response(@appointments)
  end

  def show
    json_response(@appointment)
  end

  def create
    @service.appointments.create!(appointment_params)
    json_response(@service, :created)
  end

  def update
    @appointment.update(appointment_params)
    head :no_content
  end

  def destroy
    @appointment.destroy
    head :no_content
  end

  private
  def appointment_params
    params.permit(:date, :time, :description)
  end

  def set_service
    @service = Service.find(params[:service_id])
  end

  def set_service_appointment
    @appointment = @service.appointments.find_by!(id: params[:id]) if @service
  end
end
