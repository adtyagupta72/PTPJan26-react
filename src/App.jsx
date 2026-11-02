import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is my first change in a React App! Happy Happy!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(props)
// {
//   console.log(props)
//   console.log("Colour: ", props.color)
//   console.log("Size: ", props.size)
//   return  <div>
//             <h1 style={{color:props.color}}>This is my App Functional Component</h1>
//             <br></br>
//             <button onClick={()=>props.onClickEvent()}>My Button</button>
//           </div>
// }
class AppInner extends React.Component
{
  render()
  {
    return <div>
            Inner Component
          </div>
  }
  componentWillUnmount()
  {
     console.log("======= unmounted")
  }
}

class App extends React.Component
{
  state = {
    counter: 1, 
    innerComponent: <AppInner/>
  }
  counter = 0
  constructor(props)
  {
    super(props)
    console.log("======= Constructor Called!")
    console.log(props)
  }

  multipleOfFive = {
    color: "red"
  }
  otherMultiples = {
    color: "black"
  }

  static getDerivedStateFromProps()
  {
    console.log("======= getDerivedStateFromProps Called!")
  }

  shouldComponentUpdate()
  {
    console.log("========= shouldComponentUpdate called!")
    return true
  }
  
  render()
  {
    console.log("======= render Called!")
    // console.log("Render: Counter is-", this.counter)
    // return <h1>Hello Class component</h1>
    return <div>
             <h1 style={{color:this.props.color}}>This is my App Functional Component</h1>
             <br></br>
             <button onClick={()=>this.props.onClickEvent()}>My Button</button>
             <br/>
             <br/>
             <br/>
             <div style={this.state.counter % 5 == 0 ? this.multipleOfFive : this.otherMultiples}>
              Counter: {this.state.counter}
              <br/>
              Counter1: {this.counter}
              <br/>
              <br/>
              <button onClick={()=>{
                this.setState({counter:(this.state.counter+1)})
                //Triggers re-rendering of the component => updating VDOM
                // this.state.counter++
                console.log("Counter: ", this.counter)
                this.counter++
                //Don't triggers anything!
                console.log("Counter: ", this.counter)
              }}>Increment Counter</button>
             </div>
             <br/>
             <br/>
             <label>Child Component : {this.state.innerComponent}</label>
             <br/>
             <br/>
             <button onClick={()=>{
              this.setState(
                {
                  counter:this.state.counter, 
                  innerComponent: "Component is gone now"
                })
             }}>Unmount Component</button>
           </div>
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("========= getSnapshotBeforeUpdate called!")
    console.log("prevProps: ", prevProps)
    console.log("current Props: ", this.props)
    console.log("prevState: ", prevState)
    console.log("current state: ", this.state)
    return true
  }

  componentDidMount()
  {
    console.log("========= componentDidMount called!")
  }

  componentDidUpdate()
  {
    console.log("========= componentDidUpdate called!")
  }
}

export default App;
