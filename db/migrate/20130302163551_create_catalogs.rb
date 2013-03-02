class CreateCatalogs < ActiveRecord::Migration
  def change
    create_table :catalogs do |t|
      t.string :book_id
      t.string :song_id

      t.timestamps
    end
  end
end
