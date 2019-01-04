require 'test_helper'

class PoolsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pool = pools(:one)
  end

  test "should get index" do
    get pools_url, as: :json
    assert_response :success
  end

  test "should create pool" do
    assert_difference('Pool.count') do
      post pools_url, params: { pool: { accessible: @pool.accessible, lat: @pool.lat, location: @pool.location, long: @pool.long, name: @pool.name, phone: @pool.phone, propID: @pool.propID, recId: @pool.recId, setting: @pool.setting, size: @pool.size, typeOfPool: @pool.typeOfPool } }, as: :json
    end

    assert_response 201
  end

  test "should show pool" do
    get pool_url(@pool), as: :json
    assert_response :success
  end

  test "should update pool" do
    patch pool_url(@pool), params: { pool: { accessible: @pool.accessible, lat: @pool.lat, location: @pool.location, long: @pool.long, name: @pool.name, phone: @pool.phone, propID: @pool.propID, recId: @pool.recId, setting: @pool.setting, size: @pool.size, typeOfPool: @pool.typeOfPool } }, as: :json
    assert_response 200
  end

  test "should destroy pool" do
    assert_difference('Pool.count', -1) do
      delete pool_url(@pool), as: :json
    end

    assert_response 204
  end
end
