require 'test_helper'

class TennisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tenni = tennis(:one)
  end

  test "should get index" do
    get tennis_url, as: :json
    assert_response :success
  end

  test "should create tenni" do
    assert_difference('Tenni.count') do
      post tennis_url, params: { tenni: { accessible: @tenni.accessible, courts: @tenni.courts, indoor_outdoor: @tenni.indoor_outdoor, info: @tenni.info, lat: @tenni.lat, location: @tenni.location, long: @tenni.long, name: @tenni.name, phone: @tenni.phone, propID: @tenni.propID, type: @tenni.type } }, as: :json
    end

    assert_response 201
  end

  test "should show tenni" do
    get tenni_url(@tenni), as: :json
    assert_response :success
  end

  test "should update tenni" do
    patch tenni_url(@tenni), params: { tenni: { accessible: @tenni.accessible, courts: @tenni.courts, indoor_outdoor: @tenni.indoor_outdoor, info: @tenni.info, lat: @tenni.lat, location: @tenni.location, long: @tenni.long, name: @tenni.name, phone: @tenni.phone, propID: @tenni.propID, type: @tenni.type } }, as: :json
    assert_response 200
  end

  test "should destroy tenni" do
    assert_difference('Tenni.count', -1) do
      delete tenni_url(@tenni), as: :json
    end

    assert_response 204
  end
end
