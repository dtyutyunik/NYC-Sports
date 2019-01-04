class BoccesController < ApplicationController
  before_action :set_bocce, only: [:show, :update, :destroy]

  # GET /bocces
  def index
    @bocces = Bocce.all

    render json: @bocces
  end

  # GET /bocces/1
  def show
    render json: @bocce
  end

  # POST /bocces
  def create
    @bocce = Bocce.new(bocce_params)

    if @bocce.save
      render json: @bocce, status: :created, location: @bocce
    else
      render json: @bocce.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bocces/1
  def update
    if @bocce.update(bocce_params)
      render json: @bocce
    else
      render json: @bocce.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bocces/1
  def destroy
    @bocce.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bocce
      @bocce = Bocce.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bocce_params
      params.require(:bocce).permit(:propID, :name, :location, :accessible, :lat, :long, :rating)
    end
end
