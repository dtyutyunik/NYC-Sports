class MapController < ApplicationController

  def show
    first = params[:first]
    second = params[:second]

    # resp = RestClient.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=AIzaSyCUR73C8B9YkSXexkRRodfVzMuLLB20Ry8')
    resp = RestClient.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{first}&destinations=#{second}&mode=walking&language=en-EN&key=AIzaSyCUR73C8B9YkSXexkRRodfVzMuLLB20Ry8");
    render json: resp
  end
end
