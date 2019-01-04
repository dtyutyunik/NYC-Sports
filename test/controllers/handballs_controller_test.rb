require 'test_helper'

class HandballsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @handball = handballs(:one)
  end

  test "should get index" do
    get handballs_url, as: :json
    assert_response :success
  end

  test "should create handball" do
    assert_difference('Handball.count') do
      post handballs_url, params: { handball: { lat: @handball.lat, location: @handball.location, long: @handball.long, name: @handball.name, numCourts: @handball.numCourts, propID: @handball.propID } }, as: :json
    end

    assert_response 201
  end

  test "should show handball" do
    get handball_url(@handball), as: :json
    assert_response :success
  end

  test "should update handball" do
    patch handball_url(@handball), params: { handball: { lat: @handball.lat, location: @handball.location, long: @handball.long, name: @handball.name, numCourts: @handball.numCourts, propID: @handball.propID } }, as: :json
    assert_response 200
  end

  test "should destroy handball" do
    assert_difference('Handball.count', -1) do
      delete handball_url(@handball), as: :json
    end

    assert_response 204
  end
end
