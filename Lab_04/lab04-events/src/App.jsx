import { useMemo, useState } from "react";
import "./App.css";

import ArticleForm from "./components/ArticleForm";
import ReusableButton from "./components/ReusableButton";
import Toggle from "./components/Toggle";

function ArticleItem({ article, onLike, onDelete }) {
  return (
    <div className="article">
      <div className="articleHead">
        <h3>{article.title}</h3>
        <span className="meta">{article.createdAt}</span>
      </div>

      <p className="content">{article.content}</p>

      <div className="row">
        {/* ✅ multiple handlers */}
        <ReusableButton
          label={`👍 Like (${article.likes})`}
          onClick={() => onLike(article.id)}
        />
        <ReusableButton label="🗑 Delete" onClick={() => onDelete(article.id)} />
      </div>
    </div>
  );
}

export default function App() {
  const [articles, setArticles] = useState([]);

  const student = "Adilet";
  const date = useMemo(() => new Date().toLocaleDateString(), []);

  const addArticle = (newArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  const likeArticle = (id) => {
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, likes: a.likes + 1 } : a))
    );
  };

  const deleteArticle = (id) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const clearAll = () => setArticles([]);

  return (
    <div className="container">
      <header className="header">
        <h1>Lab 04 — Event Handling & Reusable Components</h1>
        <p>
          Student: <b>{student}</b> • Date: <b>{date}</b>
        </p>
      </header>

      {/* ✅ controlled + submit + preventDefault */}
      <ArticleForm onAddArticle={addArticle} />

      <section className="card">
        <div className="row space">
          <h2>Articles</h2>
          <ReusableButton
            label="Clear All"
            onClick={clearAll}
            disabled={articles.length === 0}
          />
        </div>

        {articles.length === 0 ? (
          <p className="hint">No articles yet. Add one above 👆</p>
        ) : (
          <div className="list">
            {articles.map((a) => (
              <ArticleItem
                key={a.id}
                article={a}
                onLike={likeArticle}
                onDelete={deleteArticle}
              />
            ))}
          </div>
        )}
      </section>

      {/* ✅ Render props requirement */}
      <section className="card">
        <h2>Render Props (Toggle)</h2>
        <Toggle
          render={({ on, toggle }) => (
            <div className="row">
              <ReusableButton label={on ? "ON ✅" : "OFF ❌"} onClick={toggle} />
              <span className="hint">
                Toggle state: <b>{String(on)}</b>
              </span>
            </div>
          )}
        />
      </section>
    </div>
  );
}