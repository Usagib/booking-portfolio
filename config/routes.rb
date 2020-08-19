Rails.application.routes.draw do

  resources :services do
    resources :appointments
  end

end
