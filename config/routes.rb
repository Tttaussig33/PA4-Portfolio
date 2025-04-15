### Directory: config/routes.rb

Rails.application.routes.draw do
  root "profile#home"
  get "/projects", to: "profile#projects"
  get "/resume", to: "profile#resume"
end
