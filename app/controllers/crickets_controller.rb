class CricketsController < ApplicationController
  before_action :set_cricket, only: [:show, :update, :destroy]

  # GET /crickets
  def index
    @crickets = Cricket.all

    render json: @crickets
  end

  # GET /crickets/1
  def show
    render json: @cricket
  end

  # POST /crickets
  def create
    @cricket = Cricket.new(cricket_params)

    if @cricket.save
      render json: @cricket, status: :created, location: @cricket
    else
      render json: @cricket.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /crickets/1
  def update
    if @cricket.update(cricket_params)
      render json: @cricket
    else
      render json: @cricket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /crickets/1
  def destroy
    @cricket.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cricket
      @cricket = Cricket.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cricket_params
      params.require(:cricket).permit(:propID, :name, :location, :numFields, :lat, :long)
    end
end
