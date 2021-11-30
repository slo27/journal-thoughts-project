Rails.application.routes.draw do
  resources :journals
  resources :moods
  resources :users

  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
