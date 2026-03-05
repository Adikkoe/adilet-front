import Card from "./Card";

export default function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <Card key={p.id} title={p.name} className={p.inStock ? "" : "card--muted"}>
          <p className="meta">
            <strong>Price:</strong> ${p.price}
          </p>
          <p className="meta">
            <strong>Status:</strong> {p.inStock ? "In stock ✅" : "Out of stock ❌"}
          </p>
          <p className="meta">
            <strong>Category:</strong> {p.category}
          </p>
        </Card>
      ))}
    </div>
  );
}