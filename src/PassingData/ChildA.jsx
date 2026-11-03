import React from "react"

// class ChildA extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//     }

//     render()
//     {
//         return <div>
//             <h1>Child Component A</h1>
//             <p>This is the Child component A.</p>
//             <br/>
//             <div>
//                 Data incoming from Parent: {this.props.counter}
//             </div>
//         </div>
//     }
// }

class ChildA extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div>
            <h1>Child Component A</h1>
            <p>This is the Child component A.</p>
            <br/>
            <div>
                Data incoming from Parent: {this.props.counter}
                <br/>
                <button onClick={()=>this.props.callback()}>Increment Counter A</button>
            </div>
        </div>
    }
}
export default ChildA