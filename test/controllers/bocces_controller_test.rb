require 'test_helper'

class BoccesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bocce = bocces(:one)
  end

  test "should get index" do
    get bocces_url, as: :json
    assert_response :success
  end

  test "should create bocce" do
    assert_difference('Bocce.count') do
      post bocces_url, params: { bocce: { accessible: @bocce.accessible, lat: @bocce.lat, location: @bocce.location, long: @bocce.long, name: @bocce.name, propID: @bocce.propID, rating: @bocce.rating } }, as: :json
    end

    assert_response 201
  end

  test "should show bocce" do
    get bocce_url(@bocce), as: :json
    assert_response :success
  end

  test "should update bocce" do
    patch bocce_url(@bocce), params: { bocce: { accessible: @bocce.accessible, lat: @bocce.lat, location: @bocce.location, long: @bocce.long, name: @bocce.name, propID: @bocce.propID, rating: @bocce.rating } }, as: :json
    assert_response 200
  end

  test "should destroy bocce" do
    assert_difference('Bocce.count', -1) do
      delete bocce_url(@bocce), as: :json
    end

    assert_response 204
  end
end
