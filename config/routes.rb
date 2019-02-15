Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, constraints: { format: 'json' } do
    post :authenticate, to: 'authentication#authenticate'
    delete :log_out, to: 'authentication#destroy'
  end

  root to: 'front_end#index'

  match '*path', to: 'front_end#index', via: :all
end
