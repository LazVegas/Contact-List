import React from "react"

function Home(props) {
    return (
        <div className="homeStyle">
            <h1>H1 Tag on Home page</h1>
            <p>p tag on Home page: {props.foo}</p>
        </div>
    )
}

export default Home