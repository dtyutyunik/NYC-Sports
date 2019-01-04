require 'test_helper'

class BasketBallsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @basket_ball = basket_balls(:one)
  end

  test "should get index" do
    get basket_balls_url, as: :json
    assert_response :success
  end

  test "should create basket_ball" do
    assert_difference('BasketBall.count') do
      post basket_balls_url, params: { basket_ball: { accessible: @basket_ball.accessible, lat: @basket_ball.lat, location: @basket_ball.location, long: @basket_ball.long, name: @basket_ball.name, numCourts: @basket_ball.numCourts, propID: @basket_ball.propID } }, as: :json
    end

    assert_response 201
  end

  test "should show basket_ball" do
    get basket_ball_url(@basket_ball), as: :json
    assert_response :success
  end

  test "should update basket_ball" do
    patch basket_ball_url(@basket_ball), params: { basket_ball: { accessible: @basket_ball.accessible, lat: @basket_ball.lat, location: @basket_ball.location, long: @basket_ball.long, name: @basket_ball.name, numCourts: @basket_ball.numCourts, propID: @basket_ball.propID } }, as: :json
    assert_response 200
  end

  test "should destroy basket_ball" do
    assert_difference('BasketBall.count', -1) do
      delete basket_ball_url(@basket_ball), as: :json
    end

    assert_response 204
  end
end
