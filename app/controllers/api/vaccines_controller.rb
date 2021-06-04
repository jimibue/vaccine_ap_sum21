class Api::VaccinesController < ApplicationController
  
    before_action :set_bug
    
    def index
      render json: @bug.vaccines
    end
    
    private

    def set_bug
      @bug = Bug.find(params[:bug_id])
    end
end
