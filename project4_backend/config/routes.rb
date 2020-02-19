Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :pokemons do
    resources :moves
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'login', to: 'user#login'
  post 'signup', to: 'users#create'
  post 'newuser', to: 'pokemons#create'
  get 'newuser/moves', to: 'pokemons#get_pokemon'
  get 'pokedex', to: 'pokemons#public_pokemons'
end
