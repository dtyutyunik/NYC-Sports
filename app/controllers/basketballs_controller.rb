class BasketballsController < ApplicationController
  before_action :set_basketball, only: [:show, :update, :destroy]

  # GET /basketballs
  def index
    @basketballs = Basketball.all.limit(20)

    render json: @basketballs
  end

  # GET /basketballs/1
  def show
    render json: @basketball
  end

  # # POST /basketballs
  # def create
  #   @basketball = Basketball.new(basketball_params)
  #
  #   if @basketball.save
  #     render json: @basketball, status: :created, location: @basketball
  #   else
  #     render json: @basketball.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # PATCH/PUT /basketballs/1
  # def update
  #   if @basketball.update(basketball_params)
  #     render json: @basketball
  #   else
  #     render json: @basketball.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # DELETE /basketballs/1
  # def destroy
  #   @basketball.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_basketball
      @basketball = Basketball.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def basketball_params
      params.require(:basketball).permit(:propID, :name, :location, :numCourts, :accessible, :lat, :long)
    end
end
