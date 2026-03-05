export default function Section({ title, children }) {
  return (
    <>
      <h2 className="section__title">{title}</h2>
      {children}
    </>
  );
}