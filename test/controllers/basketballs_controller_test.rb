require 'test_helper'

class BasketballsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @basketball = basketballs(:one)
  end

  test "should get index" do
    get basketballs_url, as: :json
    assert_response :success
  end

  test "should create basketball" do
    assert_difference('Basketball.count') do
      post basketballs_url, params: { basketball: { accessible: @basketball.accessible, lat: @basketball.lat, location: @basketball.location, long: @basketball.long, name: @basketball.name, numCourts: @basketball.numCourts, propID: @basketball.propID } }, as: :json
    end

    assert_response 201
  end

  test "should show basketball" do
    get basketball_url(@basketball), as: :json
    assert_response :success
  end

  test "should update basketball" do
    patch basketball_url(@basketball), params: { basketball: { accessible: @basketball.accessible, lat: @basketball.lat, location: @basketball.location, long: @basketball.long, name: @basketball.name, numCourts: @basketball.numCourts, propID: @basketball.propID } }, as: :json
    assert_response 200
  end

  test "should destroy basketball" do
    assert_difference('Basketball.count', -1) do
      delete basketball_url(@basketball), as: :json
    end

    assert_response 204
  end
end
