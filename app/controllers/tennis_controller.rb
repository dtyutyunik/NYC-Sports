class TennisController < ApplicationController
  before_action :set_tenni, only: [:show, :update, :destroy]

  # GET /tennis
  def index
    @tennis = Tenni.all

    render json: @tennis
  end

  # GET /tennis/1
  def show
    render json: @tenni
  end

  # POST /tennis
  def create
    @tenni = Tenni.new(tenni_params)

    if @tenni.save
      render json: @tenni, status: :created, location: @tenni
    else
      render json: @tenni.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tennis/1
  def update
    if @tenni.update(tenni_params)
      render json: @tenni
    else
      render json: @tenni.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tennis/1
  def destroy
    @tenni.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tenni
      @tenni = Tenni.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def tenni_params
      params.require(:tenni).permit(:propID, :name, :location, :phone, :courts, :indoor_outdoor, :typeOfCourt, :accessible, :info, :lat, :long)
    end
end
