class HomeController < ApplicationController
  require 'httparty'

  # GET
  def index
  end

  # GET
  def search
    response = HTTParty.get('http://twitter.com/statuses/public_timeline.json')
#    puts response.body, response.code, response.message, response.headers.inspect
  end

end

