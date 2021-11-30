Rails.application.routes.draw do
  resources :journals
  resources :moods
  resources :users

  # get '/me', to: 'users#show'
  get '/me', to: 'sessions#show'
  # post '/login', to: 'sessions#create'
  # post '/logout', to: 'sessions#destroy'
end
