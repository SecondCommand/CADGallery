Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :destroy]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :index, :show, :destroy]
    resources :pictures, only: [:create, :show, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
