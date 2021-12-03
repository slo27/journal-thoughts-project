Rails.application.routes.draw do
  resources :journals
  resources :moods
  resources :users

  get '/me', to: 'sessions#show'
  # get '/moods/', to: 'moods#show'
  get '/moods/:id', to: 'moods#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
