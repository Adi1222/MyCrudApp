import React, {useState, useEffect} from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )


    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value})
    }

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault()

            props.UpdateUser(user.id, user)

        }}
        >
            <label>Name</label>
            <br></br>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <br></br>
            <label>Username</label>
            <br></br>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />    
            <br></br> 
            <br></br>  
            <button>Update User</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
                >Cancel</button>     
        </form>
    )
}

export default EditUserForm