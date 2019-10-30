import React from "react"
import { Link } from "react-router-dom"
import users from './users.json'

function User(props) {
    const id = props.match.params.id
    const user = users.find(user => user.id == id)
    return (
        <>
            <header>
                <h1 id="listView">List View</h1>
            </header>
            <div id="wrapper">
                <p id="myPeeps">My Peeps</p>
                <div id="listDiv">
                    {users.map(user => (
                    <Link key={'user-link-' + user.id} to={"/user/" + user.id}>
                        <p id="listP"><img id="circle" src={user.picture.thumbnail} /> &nbsp;&nbsp;&nbsp;{user.name.first} {user.name.last}</p>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default User