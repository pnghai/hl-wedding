Rails.application.routes.draw do
  root "home#index"

  get 'favicon/webmanifest' => 'favicon#webmanifest', format: :json
  get 'favicon/browserconfig' => 'favicon#browserconfig', format: :xml
  scope "(:locale)", locale: /en|ja|vi/ do
    resources :rsvps, only: [:create, :index]
  end
end
