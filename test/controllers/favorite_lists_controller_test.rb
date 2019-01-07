require 'test_helper'

class FavoriteListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favorite_list = favorite_lists(:one)
  end

  test "should get index" do
    get favorite_lists_url, as: :json
    assert_response :success
  end

  test "should create favorite_list" do
    assert_difference('FavoriteList.count') do
      post favorite_lists_url, params: { favorite_list: { comments: @favorite_list.comments, location_name: @favorite_list.location_name, name_of_place: @favorite_list.name_of_place, rating: @favorite_list.rating } }, as: :json
    end

    assert_response 201
  end

  test "should show favorite_list" do
    get favorite_list_url(@favorite_list), as: :json
    assert_response :success
  end

  test "should update favorite_list" do
    patch favorite_list_url(@favorite_list), params: { favorite_list: { comments: @favorite_list.comments, location_name: @favorite_list.location_name, name_of_place: @favorite_list.name_of_place, rating: @favorite_list.rating } }, as: :json
    assert_response 200
  end

  test "should destroy favorite_list" do
    assert_difference('FavoriteList.count', -1) do
      delete favorite_list_url(@favorite_list), as: :json
    end

    assert_response 204
  end
end
