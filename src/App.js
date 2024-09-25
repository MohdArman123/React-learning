import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import { Component } from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/classClick";
function App() {
  return (
    <div className="App">
      {/* <Greet name='Arman' heroname='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Farhan' heroname='Superman'>
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Imran" heroName="Spiderman" /> */}
      {/* <Welcome/> */}
      {/* <Welcome name="Arman" heroName="Batman" /> */}
      {/* < Hello /> */}
      <FunctionClick />
      < ClassClick />
    </div>
  );
}

// class App extends Component {
//   render(){
//     return(
//       <div className='App'>
//         {/* < Counter /> */}
//         {/* <Message/> */}
//         {/* <Welcome name='Arman' heroName='Batman'>
//           <p>This is Children of prop</p>
//         </Welcome>
//         <Welcome name='Farhan' heroName='Superman'/>
//         <Welcome name='Imran' heroName='Spiderman'/> */}
//       </div>
//     )
//   }
// }

export default App;
