require "test_helper"

class Api::HospitalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_hospitals_index_url
    assert_response :success
  end

  test "should get update" do
    get api_hospitals_update_url
    assert_response :success
  end

  test "should get show" do
    get api_hospitals_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_hospitals_destroy_url
    assert_response :success
  end

  test "should get create" do
    get api_hospitals_create_url
    assert_response :success
  end
end
