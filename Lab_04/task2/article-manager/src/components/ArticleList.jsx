import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, onClickRemove }) {
  return (
    <section className="card">
      <h2>Article List</h2>

      {articles.length === 0 ? (
        <p className="hint">No articles yet. Add one above.</p>
      ) : (
        <ul className="list">
          {articles.map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              onClickRemove={onClickRemove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}