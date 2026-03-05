import { useState } from "react";
import "./App.css";

export default function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <h2>React Highlight Toggle</h2>

      <button onClick={() => setIsHighlighted((prev) => !prev)}>
        Toggle Highlight
      </button>

      <p className={isHighlighted ? "highlight" : ""}>
        This text will be highlighted
      </p>
    </div>
  );
}