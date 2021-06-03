class Api::HospitalsController < ApplicationController
  before_action :set_hospital, only: [:show, :update, :destroy]
  
  def index
    render json: Hospital.all
  end

  def update
    if(@hospital.update(hospital_params))
      render json: @hospital
    else
      render json: @hospital.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @hospital
  end

  def destroy
    render json: @hospital.destroy
  end

  def create
    @hospital = Hospital.new(hospital_params)
    if(@hospital.save)
      render json: @hospital
    else
      render json: @hospital.errors, status: :unprocessable_entity
    end
  end

  private

  def hospital_params
    params.require(:hospital).permit(:name, :address)
  end

  def set_hospital
    @hospital = Hospital.find(params[:id])
  end
end
