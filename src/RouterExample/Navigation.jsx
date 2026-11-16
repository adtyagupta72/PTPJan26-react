import React from "react"
import { Link, Outlet } from "react-router-dom"

class Navigation extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ol>
                <Outlet/>
            </div>
        )
    }
}
export default Navigation
// const pending = tasks.filter((t) => !t.done).map((t) => t.title)
