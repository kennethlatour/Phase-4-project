class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :thumbnail
      t.string :color

      t.timestamps
    end
  end
end
