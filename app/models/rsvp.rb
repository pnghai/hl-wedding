class Rsvp < ApplicationRecord
  validates :email, presence: true, email: true
end
