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

class App extends React.Component
{
  state = {counter: 0}
  constructor(props)
  {
    super(props)
    console.log(props)
  }

  render()
  {
    // return <h1>Hello Class component</h1>
    return <div>
             <h1 style={{color:this.props.color}}>This is my App Functional Component</h1>
             <br></br>
             <button onClick={()=>this.props.onClickEvent()}>My Button</button>
             <br/>
             <div>
              Counter: {this.state.counter}
              <br/>
              <button onClick={()=>{
                this.setState({counter:(this.state.counter+1)})
                // this.state.counter++
              }}>Increment Counter</button>
             </div>
           </div>
  }
}

export default App;
