Rails.application.routes.draw do
  resources :favorites
  resources :users
  resources :basketballs, :only =>[:show, :index]
  resources :tennis, :only =>[:show, :index]
  resources :pools, :only =>[:show, :index]
  resources :handballs, :only =>[:show, :index]
  resources :crickets, :only =>[:show, :index]
  resources :basket_balls, :only =>[:show, :index]
  resources :bocces, :only =>[:show, :index]

  # resources :map do
  #   collection do
  #     get :from
  #       collection do
  #         get :where_to
  #       end
  #   end
  # end
  post 'user_token' => 'user_token#create'
  post 'favorites/:userID/:sportColumn/:sportID', to: 'favorites#create', as: :favoritePost
  get 'map/:first/:second', to: 'map#show', as: :map
  # get 'map' => 'journey#check'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
