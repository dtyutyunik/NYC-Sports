class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]

# http://localhost:3000/favorites?user_id=1
  # GET /favorites
  def index

    # p params[:user_id]
    #
    # @favorites= Favorite.joins
    # Favorite.all(params[:user_id])
    # @favorites = Favorite.find(params[:user_id])
    # @favorites = Favorite.joins(:favorites).where(:favorites => {:user_id => params[:user:id]}

# this queries based on the user_id we entered
# @favorites = Favorite.where(:favorites => {:user_id => params[:user_id]})

# this gets me all the pools name and location
# @favorites = Favorite.where(:favorites => {:user_id => params[:user_id]}).includes(:pool).pluck(:name, :location)


# @favorites = Favorite.where(:favorites => {:user_id => params[:user_id]}).includes(:pool).pluck(:name, :location)
# @favorites = Favorite.where(:favorites => {:user_id => params[:user_id]}).includes(:pool)
@user= User.find(params[:user_id]).to_json(include: [:pools, :basketballs, :bocces, :crickets, :handballs, :tennis] )



# Three relevant tables: users, posts, and comments

# @comments = Comment.joins(:post).where(:posts => { :user_id => @user.id })



    render json: @user
  end


# http://localhost:3000/favorites/?user_id=4&sport=basketball&sportid=9
  # post /favoriteCustom/userid/sportscolumn/sportsid
  def create

    # p params
    # p params[:user_id]
    # p params[:sport]

    # "Hello, #{name}!"

    #depending on sport we send it will become sport_id so we can target the right cell
    sportKind="#{params[:sport]}_id"
    p sportKind

    #user_id is the userid we send through
    #sportkind is the type of sport and the sportid is the id of the sport that will register on the table
    @favorite=Favorite.new({user_id: params[:user_id], sportKind => params[:sportid]})
    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
     end

    # p params[:userid]
    # params[:controller] params[:action]

# param: :slug
    # render json: {userId => userId, sportsColumn => sportsColumn, sportsID => sportsID}

    # @favorite = Favorite.new(favorite_custom_params)
    #
    #   if @favorite.save
    #     render json: @favorite, status: :created, location: @favorite
    #   else
    #     render json: @favorite.errors, status: :unprocessable_entity
    #   end

  end

  # POST /favorites
  # def create
  #   @favorite = Favorite.new(favorite_params)
  #
  #   if @favorite.save
  #     render json: @favorite, status: :created, location: @favorite
  #   else
  #     render json: @favorite.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
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
