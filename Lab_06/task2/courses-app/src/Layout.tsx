import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer style={{ marginTop: "30px" }}>Courses App 2026</footer>
    </>
  );
}