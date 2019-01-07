Rails.application.routes.draw do
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
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
