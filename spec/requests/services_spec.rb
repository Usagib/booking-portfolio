require 'rails_helper'
require 'faker'

RSpec.describe 'Services', type: :request do
  let(:user) { create(:user) }
  let!(:services) { create_list(:service, 10, user_id: user.id) }
  let(:service_id) { services.first.id }
  let(:headers) { valid_headers }
  example_name = Faker::Name.name
  example_description = Faker::Quote.matz
  example_max_cost = Faker::Number.number(digits: 2)
  example_min_cost = Faker::Number.number(digits: 3)
  example_image_url = 'https://via.placeholder.com/50'

  describe 'GET /services' do
    before do
      get '/api/services',
          params: {},
          headers: headers
    end

    it 'gets services' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'http status 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /services/:id' do
    before do
      get "/api/services/#{service_id}",
          params: {},
          headers: headers
    end

    context 'when the record exists' do
      it 'returns the service' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(service_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:service_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Service/)
      end
    end
  end

  describe 'POST /services' do
    let(:valid_attributes) do
      {
        name: example_name,
        description: example_description,
        max_cost: example_max_cost,
        min_cost: example_min_cost,
        image_url: example_image_url
      }.to_json
    end

    context 'when the request is valid' do
      before { post '/api/services', params: valid_attributes, headers: headers }

      it 'creates a service' do
        expect(json['name']).to eq(example_name)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:no_attributes) { { name: '' }.to_json }
      before { post '/api/services', params: no_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  describe 'PUT /services/:id' do
    let(:valid_attributes) { { name: 'Updated name' }.to_json }

    context 'when the record exists' do
      before { put "/api/services/#{service_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /services/:id' do
    before { delete "/api/services/#{service_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
