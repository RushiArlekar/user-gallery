import React from 'react'

function UserList(props) {
    return (
        <div className="Users" >
            {props.userData.map(element => <h4 key={element.id} onClick={
                () => props.clickHandler(element.id)
            }>{element.first_name} {element.last_name}</h4>)}
        </div>
    )
}

export default UserList