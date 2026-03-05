import { useState, useEffect } from "react";
import "./App.css";

function Message(props) {
  return <h2>Hello, {props.name} 👋</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }, [count]);

  return (
    <>
      <h1>Lab 03 — React Components & Hooks</h1>

      <p>Student: Adilet</p>
      <p>Date: 3/5/2026</p>

      <Message name="React Student" />

      <h2>Counter Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  );
}

export default App;