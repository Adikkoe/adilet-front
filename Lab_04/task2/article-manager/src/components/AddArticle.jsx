export default function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <section className="card">
      <h2>{name}</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
        className="input"
      />

      <input
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
        className="input"
      />

      <button onClick={onClickAdd} className="btn">
        Add
      </button>
    </section>
  );
}