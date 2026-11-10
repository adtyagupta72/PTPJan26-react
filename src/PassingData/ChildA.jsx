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
                <button id="ChildA" onClick={()=>{this.props.callback()}}>Increment Counter A</button>
                <br/>
                <input type="text" placeholder="Something for Parent" id="childA"/>
                <br/>
                <button onClick={()=>{
                    this.props.messageFunction(document.getElementById("childA").value)
                    // console.log("childA: ", document.getElementById("childA").value)
                }}>Send to Parent</button>
            </div>
        </div>
    }
}
export default ChildA