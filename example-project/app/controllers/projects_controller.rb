class ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects, status: :ok
      end
    
      def create
        project = Project.create!(project_params)
        render json: project, status: :created
      end
    
      def show
        project = find_project
        render json: project, status: :ok
      end
    
      def update
        project = find_project
        project.update!(project_params)
        render json: project, status: :ok
      end
    
      def increment_likes
        project = find_project
        project.update!(likes: project.likes + 1)
        render json: project, status: :ok
      end
    
      def destroy
        project = find_project
        project.destroy
        head :no_content
      end
    
    private

    def project_params
        params.permit(:name, :description, :red, :green, :blue, :thumbnail)
    end

    def find_project
        Project.find(params[:id])
    end

end
