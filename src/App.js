import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const add = () => {
    setCounter((current) => current + 1);
  };
  const decrease = () => {
    setCounter((current) => current - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name: {name}</p>
        <p>Count {counter}</p>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={add}>+</button>
        <button onClick={decrease}>-</button>
      </header>
    </div>
  );
}

export default App;
