class MapController < ApplicationController


  def show
    first = params[:first]
    second = params[:second]
    third= params[:third]
    # apiKey = ENV.fetch('REACT_APP_GOOGLE_CLIENT_ID')
    # resp = RestClient.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=AIzaSyCUR73C8B9YkSXexkRRodfVzMuLLB20Ry8')
    resp = RestClient.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{first}+NY&destinations=#{second}+NY&mode=walking&language=en-EN&key=AIzaSyCUR73C8B9YkSXexkRRodfVzMuLLB20Ry8");
    # resp = RestClient.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{first}+NY&destinations=#{second}+NY&mode=walking&language=en-EN&key=#{third}");
    render json: resp
  end
end
