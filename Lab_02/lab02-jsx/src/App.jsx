import "./App.css";

function App() {

  const student = "Adilet";
  const today = new Date().toLocaleDateString();

  const topics = [
    "JSX syntax",
    "Expressions in JSX",
    "Fragments",
    "Rendering lists"
  ];

  return (
    <>
      <h1>Lab 02 — JSX, Fragments & Expressions</h1>

      <p>
        Student: <b>{student}</b>
      </p>

      <p>
        Date: <b>{today}</b>
      </p>

      <h2>Expressions in JSX</h2>

      <p>2 + 3 = {2 + 3}</p>

      <h2>Topics</h2>

      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

    </>
  );
}

export default App;