import React from "react"
import { Link } from "react-router-dom"
import users from './users.json'

function Contact(props) {
    const id = props.match.params.id
    const user = users.find(user => user.id == id)
    return (
        <>
            <header>
                <h1 id="singleView">Single View</h1>
            </header>
            <Link to="/" id="backArrow">&larr;</Link>
            <div id="singleWrapper">
                <div id="listDivContacts">
                    <Link key={'user-link-' + user.id} to={"/user/" + user.id}>
                        <p id="profile"><img id="profilePic" src={user.picture.thumbnail} /></p>
                        <p className="listPContacts">{user.name.first} {user.name.last}</p>
                        <p className="listPContacts">{user.email}</p>
                        <p className="listPContacts">{user.phone}</p>
                        <p className="listPContacts">{user.location.city}, {user.location.state}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contact