class ImagesController < ApplicationController
    
    def create
        image = Image.create!(image_params)
        render json: image, status: :created
    end

    private

    def image_params
        params.permit(:url, :description, :project_id)
    end
end
