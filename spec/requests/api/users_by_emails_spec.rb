require 'rails_helper'

RSpec.describe Api::UsersByEmailsController, type: :request do
  describe 'GET#show' do
    let(:user) { create(:user) }

    context "user exists" do
      it 'is successful' do
        get api_users_by_emails_path, params: {email: user.email}, as: :json
        expect(response).to be_successful
      end
    end

    context "user does not exist" do
      it 'is not found' do
        get api_users_by_emails_path, params: {email: "junk"}, as: :json
        expect(response.status).to eq(404)
      end
    end
  end
end