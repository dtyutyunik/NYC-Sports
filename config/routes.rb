Rails.application.routes.draw do
  resources :favorites
  resources :favorite_lists
  resources :comments
  resources :users
  resources :basketballs
  resources :tennis
  resources :pools
  resources :handballs
  resources :crickets
  resources :basket_balls
  resources :bocces

  # resources :map do
  #   collection do
  #     get :from
  #       collection do
  #         get :where_to
  #       end
  #   end
  # end
  post 'user_token' => 'user_token#create'
  get 'map/:first/:second', to: 'map#show', as: :map
  get 'favorite/:id', to: 'favorite#show', as: :showMeFavorite
  delete 'favorite/:id', to: 'favorite#destroy', as: :destroyFavorite
  # get 'map' => 'journey#check'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
