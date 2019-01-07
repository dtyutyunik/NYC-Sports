class FavoriteListsController < ApplicationController
  before_action :set_favorite_list, only: [:show, :update, :destroy]

  # GET /favorite_lists
  def index
    @favorite_lists = FavoriteList.all

    render json: @favorite_lists
  end

  # GET /favorite_lists/1
  def show
    render json: @favorite_list
  end

  # POST /favorite_lists
  def create
    @favorite_list = FavoriteList.new(favorite_list_params)

    if @favorite_list.save
      render json: @favorite_list, status: :created, location: @favorite_list
    else
      render json: @favorite_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorite_lists/1
  def update
    if @favorite_list.update(favorite_list_params)
      render json: @favorite_list
    else
      render json: @favorite_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorite_lists/1
  def destroy
    @favorite_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_list
      @favorite_list = FavoriteList.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def favorite_list_params
      params.require(:favorite_list).permit(:name_of_place, :location_name, :comments, :rating)
    end
end
