require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #Services" do
    it "returns http success" do
      get :Services
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #Appointments" do
    it "returns http success" do
      get :Appointments
      expect(response).to have_http_status(:success)
    end
  end

end
