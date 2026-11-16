import React from "react"

class Home extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("Home is loaded")

        const tasks = [
        { title: 'Wash car', done: true },
        { title: 'Buy fruit', done: false },
        { title: 'Call mom', done: false },
        ];

        const pending = tasks.filter((t) => !t.done).map((t) => t.title)
        console.log(pending)
    }

    render()
    {
        return (
            <div>Home</div>
        )
    }
}
export default Home
