Rails.application.routes.draw do
  resources :journals
  resources :moods
  resources :users

  get '/me', to: 'sessions#show'
  get '/moods', to: 'sessions#show'
  post '/journals', to: 'sessions#show'
  # post '/moods', to: 'sessions#create'
  # post '/journals', to: 'sessions#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
