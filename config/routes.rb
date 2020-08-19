Rails.application.routes.draw do

  resources :users do
    resources :appointments
  end

  resources :services do
    resources :appointments
  end
end
