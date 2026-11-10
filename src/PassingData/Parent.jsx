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
    state = {
        counterA: 100, 
        counterB: 10, 
        messageA:"", 
        messageB:""
    }
    constructor()
    {
        super()
    }

    incrementA = () =>
    {
        this.setState({...this.state, counterA: this.state.counterA+1})
    }

    incrementB = () =>
    {
        this.setState({...this.state, counterB: this.state.counterB+1})
    }

    messageFromA = (messageA)=>     //Callback function to read child's message
    {
        this.setState({...this.state, messageA: messageA})
    }

    messageFromB = (messageB)=>     //Callback function to read child's message
    {
        this.setState({...this.state, messageB: messageB})
    }

    render()
    {
        // console.log("State: ", this.state)
        return <div>
            <h1>Parent Component</h1>
            <p>This is the parent component.</p>
            <div>
                <label>
                    Child component incoming
                    <br/>
                    <ChildB counter={this.state.counterB} callback={this.incrementB} messageFunction={this.messageFromB}/>
                    <br/>
                    <ChildA counter={this.state.counterA} callback={this.incrementA} messageFunction={this.messageFromA}/>
                </label>
            </div>

            <label>Message from A: {this.state.messageA ? this.state.messageA : "No message yet"}</label>
            <br/>
            <label>Message from B: {this.state.messageB  ? this.state.messageA : "No message yet"}</label>
        </div>
    }
}
export default Parent