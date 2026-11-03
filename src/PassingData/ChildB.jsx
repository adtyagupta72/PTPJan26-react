import React from "react"

// class ChildB extends React.Component
// {
//     constructor()
//     {
//         super()
//     }

//     render()
//     {
//         return <div>
//             <h1>Child Component B</h1>
//             <p>This is the Child component B.</p>
//             <div>
//                 Data incoming from Parent: {this.props.counter}
//             </div>
//         </div>
//     }
// }
class ChildB extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div>
            <h1>Child Component B</h1>
            <p>This is the Child component B.</p>
            <div>
                Data incoming from Parent: {this.props.counter}
                <br/>
                <button onClick={()=>this.props.callback()}>Increment Counter A</button>
            </div>
        </div>
    }
}
export default ChildB