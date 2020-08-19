require 'rails_helper'
require 'faker'

RSpec.describe 'Appointment', type: :request do
  let(:user) { create(:user) }
  let!(:service) { create(:service) }
  let!(:appointments) { create_list(:appointment, 10, service_id: service.id) }
  let(:service_id) { service.id }
  let(:id) { appointments.first.id }
  let(:headers) { valid_headers }

  example_date = Faker::Date.forward(days: 30)
  example_time = Faker::Time.forward(days: 5,  period: :evening)
  example_description = 'this is a description of the'

  describe 'GET /services/:service_id/appointments' do
    before {
      get "/services/#{service_id}/appointments",
      params: {},
      headers: headers
     }

    it 'gets appointment from services' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'http status 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /services/:service_id/appointments/:id' do
      before {
        get "/services/#{service_id}/appointments/#{id}",
        params: {},
        headers: headers }

    context 'it exists' do
      it 'returns the appointment' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(id)
      end

      it 'http status 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'it does not exist' do
      let(:service_id) { 100 }

      it 'http status 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns error message' do
        expect(response.body).to match(/Couldn't find Service/)
      end
    end
  end

  describe 'POST /services/:service_id/appointments' do
    let(:valid_attributes) {
      {
        date: example_date,
        time: example_time,
        description: example_description
      }.to_json
    }

    context 'when attributes are valid' do
      before { post "/services/#{service_id}/appointments", params: valid_attributes, headers: headers }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when attributes are invalid' do
      let(:invalid_description) { { description: ''}.to_json }
      before { post "/services/#{service_id}/appointments", params: invalid_description, headers: headers }

      it 'http status 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Description is too short/)
      end
    end
  end

  describe 'PUT /services/:service_id/appointments/:id' do
    let(:valid_attributes) {
      {
            description: "This is the updated description for appointment"
      }.to_json
    }

    before { put "/services/#{service_id}/appointments/#{id}", params: valid_attributes, headers: headers }

    context 'when the record exists' do
      it 'updates the record' do
        updated_appointment = Appointment.find(id)
        expect(updated_appointment.description).to match(/This is the updated description for appointment/)
      end

      it 'http status 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when the record does not exists' do
      let(:id) { 0 }

      it 'http status 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
       expect(response.body).to match(/Couldn't find Appointment/)
     end
    end
  end

  describe 'DELETE /appointments/:id' do
    before { delete "/services/#{service_id}/appointments/#{id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
