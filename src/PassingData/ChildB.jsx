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
                <button id="ChildB" onClick={()=>{this.props.callback()}}>Increment Counter B</button>
                <br/>
                <input type="text" placeholder="Something for Parent" id="childB"/>
                <br/>
                <button onClick={()=>{
                    this.props.messageFunction(document.getElementById("childB").value)
                    // console.log("childA: ", document.getElementById("childA").value)
                }}>Send to Parent</button>
            </div>
        </div>
    }
}
export default ChildB