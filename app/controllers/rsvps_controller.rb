class RsvpsController < ApplicationController
  before_action :set_rsvp, only: %i[ show update destroy ]

  # GET /rsvps
  # GET /rsvps.json
  def index
    @rsvps = Rsvp.all
  end

  # GET /rsvps/1
  # GET /rsvps/1.json
  def show
  end

  # POST /rsvps
  # POST /rsvps.json
  def create
    @rsvp = Rsvp.new(rsvp_params)

    if @rsvp.save
      render :show, status: :created, location: @rsvp
    else
      render json: @rsvp.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rsvps/1
  # PATCH/PUT /rsvps/1.json
  def update
    if @rsvp.update(rsvp_params)
      render :show, status: :ok, location: @rsvp
    else
      render json: @rsvp.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rsvps/1
  # DELETE /rsvps/1.json
  def destroy
    @rsvp.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rsvp
      @rsvp = Rsvp.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rsvp_params
      params.require(:rsvp).permit(:name, :email, :guests, :message)
    end
end
