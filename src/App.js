import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <h3>Function click component : </h3>
      <FunctionClick />
      <h3>Class Click Component : </h3>
      <ClassClick /> */}
      <h3>EventBind Component : </h3>
      <EventBind />
      {/* <Message /> */}
      {/*     <Greet name="Aditya" heroName="Batman" />
      {/*   <Greet name="Rohit" heroName="Superman" />
      <Greet name="Rohan" heroName="Joker" /> */}
      {/*<h3>Welcome Component :</h3>
      <Welcome name="Rohan" heroName="Joker" /> */}
    </div>
  );
}

export default App;
