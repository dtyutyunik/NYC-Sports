class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]

# http://localhost:3000/favorites?user_id=2
  # GET /favorites
  def index
#shows all info of speciifc user

if params.has_key?(:user_id)
    @user= User.find(params[:user_id]).to_json(include: [:pools, :basketballs, :bocces, :crickets, :handballs, :tennis] )
else
  @user=Favorite.all

end


    render json: @user
  end


# http://localhost:3000/favorites/?user_id=4&sport=basketball&sportid=9
  def create

    #depending on sport we send it will become sport_id so we can target the right cell
    sportKind="#{params[:sport]}_id"

    #sportkind is the type of sport and the sportid is the id of the sport that will register on the table
    @favorite=Favorite.new({user_id: params[:user_id], sportKind => params[:sportid]})
    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
     end

  end


  # DELETE /favorites/1
  def destroy

    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    # def favorite_custom_params
    #   params.require(:favorite).permit(:userID, :sportColumn, :sportID)
    # end
    def favorite_params
      params.require(:favorite).permit(:user_id, :court_id)
    end
end
