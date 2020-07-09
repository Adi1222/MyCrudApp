import React , { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {

  const userData = [
    
  ]

  const initialFormState = { id: null, name: '', username: ''}

  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  /*BY NORMAL METHOD
  
  const addUser = (user) => {
    user.id = this.state.users.length + 1
    this.setState({ users:[...this.state.users, user]});
  }
  
  */

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editUser = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username})
  }

  const UpdateUser = (id, updatedUser) => {
    setEditing(false)
    if(!updatedUser.name || !updatedUser.username) {
      alert('Invalid Name or Username');
      return
    }

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))

  }


  return (
    <div className="container">
      <h1>CRUD APP</h1>
      <div className="d-flex justify-content-around">
        <div className="p-2 bd-highlight">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} UpdateUser={UpdateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          </div>

        <div className="p-2 bd-highlight">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
        </div>
      </div>
    </div>
  )
}

export default App;
