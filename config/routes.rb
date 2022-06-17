Rails.application.routes.draw do
  resources :rsvps
  root "home#index"
  scope "(:locale)", locale: /en|ja|vi/ do
    resources :books
  end
end
