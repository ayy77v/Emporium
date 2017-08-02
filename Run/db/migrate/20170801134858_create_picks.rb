class CreatePicks < ActiveRecord::Migration[5.0]
  def change
    create_table :picks do |t|
      t.datetime :from
      t.datetime :to

      t.timestamps
    end
  end
end
