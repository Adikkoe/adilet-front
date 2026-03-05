export default function App() {
  const studentName = "Adilet";
  const date = "03/05/2026";

  // Expressions
  const a = 2;
  const b = 3;

  // Lists
  const topics = ["JSX syntax", "Expressions in JSX", "Fragments", "Rendering lists"];

  return (
    <>
      <div className="page">
        <header className="header">
          <h1>Lab 02 — JSX, Fragments & Expressions</h1>

          <div className="meta">
            <p>
              <b>Student:</b> {studentName}
            </p>
            <p>
              <b>Date:</b> {date}
            </p>
          </div>
        </header>

        <section className="card">
          <h2>Expressions in JSX</h2>
          <p className="example">
            {a} + {b} = <b>{a + b}</b>
          </p>
        </section>

        <section className="card">
          <h2>Topics</h2>

          {/* Rendering list */}
          <ul className="list">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </section>

        <footer className="footer">Student Portal 2026</footer>
      </div>
    </>
  );
}