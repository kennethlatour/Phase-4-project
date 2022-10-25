class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :thumbnail
      t.integer :red 
      t.integer :green
      t.integer :blue

      t.timestamps
    end
  end
end
