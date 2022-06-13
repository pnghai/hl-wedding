Rails.application.routes.draw do
  root "home#index"
  scope "(:locale)", locale: /en|ja|vi/ do
    resources :books
  end
end
