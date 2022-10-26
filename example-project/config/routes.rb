Rails.application.routes.draw do

  resources :project_files
  resources :images, only: [:index, :create]
  resources :projects, only: [:create, :index, :show, :destroy, :update]
  resources :user_projects, only: [:create, :index, :show, :destroy, :update]
  resources :users, only: [:create, :index, :show, :destroy, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
