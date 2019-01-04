require 'test_helper'

class CricketsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cricket = crickets(:one)
  end

  test "should get index" do
    get crickets_url, as: :json
    assert_response :success
  end

  test "should create cricket" do
    assert_difference('Cricket.count') do
      post crickets_url, params: { cricket: { lat: @cricket.lat, location: @cricket.location, long: @cricket.long, name: @cricket.name, numFields: @cricket.numFields, propID: @cricket.propID } }, as: :json
    end

    assert_response 201
  end

  test "should show cricket" do
    get cricket_url(@cricket), as: :json
    assert_response :success
  end

  test "should update cricket" do
    patch cricket_url(@cricket), params: { cricket: { lat: @cricket.lat, location: @cricket.location, long: @cricket.long, name: @cricket.name, numFields: @cricket.numFields, propID: @cricket.propID } }, as: :json
    assert_response 200
  end

  test "should destroy cricket" do
    assert_difference('Cricket.count', -1) do
      delete cricket_url(@cricket), as: :json
    end

    assert_response 204
  end
end
