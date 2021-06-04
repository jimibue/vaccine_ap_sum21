Rails.application.routes.draw do


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/things', to:'things#index'
    resources :hospitals
    resources :bugs do
      resources :vaccines
    end

    get 'bugs_and_vaccines/:id', to: 'bugs#bug_with_vaccines'
  end 
end
