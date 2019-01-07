class PoolsController < ApplicationController
  before_action :set_pool, only: [:show, :update, :destroy]

  # GET /pools
  def index
    @pools = Pool.all

    render json: @pools
  end

  # GET /pools/1
  def show
    resp = RestClient.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver+BC|Seattle&destinations=San+Francisco|Vancouver+BC&mode=bicycling&language=fr-FR&key=AIzaSyCUR73C8B9YkSXexkRRodfVzMuLLB20Ry8')
    # newresp = JSON.parse(resp)["data"]

    render json: resp

  end

  # POST /pools
  def create
    @pool = Pool.new(pool_params)

    if @pool.save
      render json: @pool, status: :created, location: @pool
    else
      render json: @pool.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pools/1
  def update
    if @pool.update(pool_params)
      render json: @pool
    else
      render json: @pool.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pools/1
  def destroy
    @pool.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pool
      @pool = Pool.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pool_params
      params.require(:pool).permit(:propID, :name, :location, :phone, :typeOfPool, :setting, :size, :accessible, :lat, :long, :recId)
    end
end
