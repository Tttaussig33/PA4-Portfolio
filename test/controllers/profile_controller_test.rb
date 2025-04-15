require "test_helper"

class ProfileControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get profile_home_url
    assert_response :success
  end

  test "should get about" do
    get profile_about_url
    assert_response :success
  end

  test "should get portfolio" do
    get profile_portfolio_url
    assert_response :success
  end
end
