class UserProjectsController < ApplicationController

    def index
        user_projects = UserProject.all
        render json: user_projects, status: :ok
    end
    
    def create
        user = User.find_by(username: params[:username])
        user_project = UserProject.create!(user: user, project_id: params[:project_id])
        render json: user_project, status: :created
    end
    
    def show
        user_project = find_user_project
        render json: user_project, include: :user, status: :ok
    end
    
    def update
        user_project = find_user_project
        user_project.update!(user_project_params)
        render json: user_project, status: :ok
    end
    
    def destroy
        user_project = find_user_project
        user_project.destroy
        head :no_content
    end


    private

    def user_project_params
        params.permit(:user_id, :project_id)
    end

    def find_user_project
        UserProject.find(params[:id])
    end

end
