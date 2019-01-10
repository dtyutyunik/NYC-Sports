class HandballsController < ApplicationController
  before_action :set_handball, only: [:show, :update, :destroy]

  # GET /handballs
  def index
    @handballs = Handball.all.limit(20)

    render json: @handballs
  end

  # GET /handballs/1
  def show
    render json: @handball
  end

  # POST /handballs
  def create
    @handball = Handball.new(handball_params)

    if @handball.save
      render json: @handball, status: :created, location: @handball
    else
      render json: @handball.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /handballs/1
  def update
    if @handball.update(handball_params)
      render json: @handball
    else
      render json: @handball.errors, status: :unprocessable_entity
    end
  end

  # DELETE /handballs/1
  def destroy
    @handball.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_handball
      @handball = Handball.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def handball_params
      params.require(:handball).permit(:propID, :name, :location, :numCourts, :lat, :long)
    end
end
