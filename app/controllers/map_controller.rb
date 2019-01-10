class MapController < ApplicationController


  def show
    first = params[:first]
    second = params[:second]
    # third= params[:third]
    # apiKey = ENV.fetch('REACT_APP_GOOGLE_CLIENT_ID')
    resp = RestClient.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{first}+NY&destinations=#{second}+NY&mode=walking&language=en-EN&key=#{Rails.application.credentials.google_api_key}");
    render json: resp
  end
end
