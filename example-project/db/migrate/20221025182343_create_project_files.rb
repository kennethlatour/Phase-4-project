class CreateProjectFiles < ActiveRecord::Migration[6.1]
  def change
    create_table :project_files do |t|
      t.string :url
      t.string :description
      t.string :project_id

      t.timestamps
    end
  end
end
