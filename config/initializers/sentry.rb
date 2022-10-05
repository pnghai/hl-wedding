Sentry.init do |config|
  config.dsn = 'https://e1f1c19009b7470fa1d58ba2a1331bd4@o4503928728190976.ingest.sentry.io/4503928728190976'
  config.breadcrumbs_logger = [:active_support_logger, :http_logger]

  # Set traces_sample_rate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production.
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |context|
    true
  end
end