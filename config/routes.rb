Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'front_end#index'

  match '*path', to: 'front_end#index', via: :all
end
