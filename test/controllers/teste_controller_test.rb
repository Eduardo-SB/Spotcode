require 'test_helper'

class TesteControllerTest < ActionDispatch::IntegrationTest
  test "should get teste" do
    get teste_teste_url
    assert_response :success
  end

end
