class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :url
      t.string :description
      t.string :project_id

      t.timestamps
    end
  end
end
