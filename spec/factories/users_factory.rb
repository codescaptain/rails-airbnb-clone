FactoryBot.define do
  factory :user, class: User do
    sequence(:password) { |n| "password#{n}1234" }
    sequence(:email) { |n| "test#{n}@gmail.com" }
  end
end