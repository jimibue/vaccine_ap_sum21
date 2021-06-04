class Api::BugsController < ApplicationController
    before_action :set_bug, only: [:show, :update, :destroy, :bug_with_vaccines]

    def index
        render json: Bug.all
    end

    def show
        render json: @bug
    end

    def bug_with_vaccines
        render json: {bug: @bug, vaccines: @bug.vaccines}
    end

    def create
        @bug = Bug.new(bug_params)
        if(@bug.save)
            render json: @bug
        else
            render json: @bug.errors, status: :unprocessable_entity
        end
    end

    def update
        if(@bug.update(bug_params))
            render json: @bug
        else
            render json: @bug.errors, status: :unprocessable_entity
        end
    end

    def destroy
        render json: @bug.destroy
    end

   private

   def bug_params
     params.require(:bug).permit(:name) 
   end

   def set_bug
      @bug = Bug.find(params[:id])
   end
end
