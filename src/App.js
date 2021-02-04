import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/*   <Greet name="Aditya" heroName="Batman" />
      <Greet name="Rohit" heroName="Superman" />
      <Greet name="Rohan" heroName="Joker" /> */}
    </div>
  );
}

export default App;
