import React from "react"
import "./index.css"
import Contact from "./Contact"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import User from "./User"
import users from "./users.json"

function App(props) {
  return (
    <Router>
      <div id="container">
        <main>
          <Route exact path="/" component={User} />         
          <Route path="/user/:id" component={Contact} />
          <Route path="/contact/:id" component={User} />
        </main>
      </div>
    </Router>
  )
}

export default App