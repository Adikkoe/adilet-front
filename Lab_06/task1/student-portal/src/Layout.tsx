import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer style={{ marginTop: 40 }}>
        Student Portal 2026
      </footer>
    </>
  );
}