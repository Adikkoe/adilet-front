import "./App.css";
import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Card from "./components/Card";

export default function App() {
  const studentName = "Adilet";
  const date = new Date().toLocaleDateString();

  const products = [
    { id: "p1", name: "Laptop Stand", price: 25, inStock: true, category: "Accessories" },
    { id: "p2", name: "Wireless Mouse", price: 18, inStock: true, category: "Accessories" },
    { id: "p3", name: "Mechanical Keyboard", price: 55, inStock: false, category: "Peripherals" },
    { id: "p4", name: "USB-C Hub", price: 30, inStock: true, category: "Adapters" },
  ];

  const inStockCount = products.filter((p) => p.inStock).length;

  return (
    <div className="page">
      <header className="header">
        <h1>Lab 02 — Custom JSX Elements & Dynamic Props</h1>
        <p className="sub">
          Student: <strong>{studentName}</strong> • Date: <strong>{date}</strong>
        </p>
      </header>

      <main className="main">
        {/* Task 3: Section (fragment) + composition */}
        <Section title="Products">
          <ProductList products={products} />

          <div className="summary">
            {/* Task 1: Card used multiple times */}
            <Card title="Summary">
              <p>Total products: <strong>{products.length}</strong></p>
              <p>In stock: <strong>{inStockCount}</strong></p>
            </Card>

            <Card title="Notes" className="card--info">
              <p>
                This page uses <strong>props</strong>, <strong>children</strong>,{" "}
                <strong>JSX expressions</strong> ({"{}"}), and <strong>.map()</strong> with keys.
              </p>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Lab 02</footer>
    </div>
  );
}