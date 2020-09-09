Rails.application.routes.draw do
  scope :api do
    resources :services do
      resources :appointments
    end
      post 'auth/login', to: 'authentication#authenticate'
      post 'signup', to: 'users#create'
  end
end
