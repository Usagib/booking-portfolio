class RemoveUserIdReference < ActiveRecord::Migration[6.0]
  def change
    remove_reference(:appointments, :user, index:true, foreign_key: true)
    add_reference(:services, :user, index:true, foreign_key: true)
  end
end
