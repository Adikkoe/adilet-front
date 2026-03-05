export default function Card({ title, children, className = "" }) {
  return (
    <article className={`card ${className}`}>
      <h3 className="card__title">{title}</h3>
      <div className="card__body">{children}</div>
    </article>
  );
}