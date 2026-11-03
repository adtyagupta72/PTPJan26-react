import React from "react"
import ChildA from "./ChildA"
import ChildB from "./ChildB"

// class Parent extends React.Component
// {
//     state = {counterA: 100, counterB: 10}
//     constructor()
//     {
//         super()
//     }

//     incrementA = () =>
//     {
//         this.setState({counterA: this.state.counterA+1})
//     }

//     incrementB = () =>
//     {
//         this.setState({counterB: this.state.counterB+1})
//     }

//     render()
//     {
//         return <div>
//             <h1>Parent Component</h1>
//             <p>This is the parent component.</p>
//             <div>
//                 <label>
//                     Child component incoming
//                     <br/>
//                     <ChildA counter={this.state.counterA}/>
//                     <br/>
//                     <button onClick={()=>this.incrementA()}>Increment Counter A</button>
//                     <br/>
//                     <ChildB counter={this.state.counterB}/>
//                     <br/>
//                     <button  onClick={()=>this.incrementB()}>Increment Counter B</button>
//                 </label>
//             </div>
//         </div>
//     }
// }

class Parent extends React.Component
{
    state = {counterA: 100, counterB: 10}
    constructor()
    {
        super()
    }

    incrementA = () =>
    {
        this.setState({counterA: this.state.counterA+1})
    }

    incrementB = () =>
    {
        this.setState({counterB: this.state.counterB+1})
    }

    render()
    {
        return <div>
            <h1>Parent Component</h1>
            <p>This is the parent component.</p>
            <div>
                <label>
                    Child component incoming
                    <br/>
                    <ChildA counter={this.state.counterA} callback={this.incrementA}/>
                    <br/>
                    <ChildB counter={this.state.counterB} callback={this.incrementB}/>
                </label>
            </div>
        </div>
    }
}
export default Parent