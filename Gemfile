source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.3"

# # The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
# gem "sprockets-rails"
gem "propshaft"
# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem "jsbundling-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
# gem "stimulus-rails"
gem 'slim-rails'
gem 'hiredis'
# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails', '~> 5.0', '>= 5.0.1'
  gem 'rubocop-rspec', '~> 2.8'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
  gem 'rails_real_favicon'
  gem 'awesome_print', '~> 2.0.0.pre2'
  gem 'listen', '~> 3.7', '>= 3.7.1'

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  gem "rack-mini-profiler"
  # pry
  gem 'pry-doc'
  gem 'pry-stack_explorer'
  gem 'better_errors'
  # エラー画面でREPL実行できるように
  gem 'binding_of_caller'
  # N+1問題を発見してくれる
  gem 'bullet'
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  gem "spring"
  gem 'spring-watcher-listen', '~> 2.0', '>= 2.0.1'
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem 'autodoc', '~> 0.7.6'
  gem 'database_rewinder', '~> 0.9.8'
  gem 'json_spec', '~> 1.1', '>= 1.1.5'
  gem 'rspec-request_describer', '~> 0.3.2'
end

gem 'factory_bot_rails', '~> 6.2'
gem 'ffaker', '~> 2.20'
gem 'pry-rails'
gem 'hirb'
gem 'hirb-unicode-steakknife', '~> 0.0.9'
gem 'tailwindcss-rails'
gem 'rails-i18n'
gem 'rails_real_favicon'
gem 'rubocop-performance', '~> 1.13', '>= 1.13.2'
gem 'rubocop-rails', '~> 2.13', '>= 2.13.2'
gem 'sidekiq', '~> 6.4', '>= 6.4.1'
gem 'sidekiq-cron', '~> 1.2'
gem 'timeliness-i18n', '~> 0.11.0'
gem 'validates_timeliness', '~> 5.0'
gem 'sidekiq-failures'
gem "hotwire-livereload", "~> 1.1", :group => :development
gem 'email_validator'
gem "hcaptcha"
gem "sentry-ruby"
gem "sentry-rails"