FactoryBot.define do
  factory :rsvp do
    name { "MyString" }
    email { "MyString" }
    guests { 1 }
    message { "MyText" }
  end
end
