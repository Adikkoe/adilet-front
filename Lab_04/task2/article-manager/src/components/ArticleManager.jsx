import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

export default function ArticleManager({ addArticle, articleList }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const [articles, setArticles] = useState([
    { id: "a1", title: "First Article", summary: "This is the first summary." },
    { id: "a2", title: "Second Article", summary: "This is the second summary." },
  ]);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSummary = (e) => setSummary(e.target.value);

  const onClickAdd = () => {
    const t = title.trim();
    const s = summary.trim();
    if (!t || !s) return;

    setArticles((prev) => [
      { id: crypto.randomUUID(), title: t, summary: s },
      ...prev,
    ]);

    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const addProps = {
    name: "Add Article",
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
  };

  const listProps = { articles, onClickRemove };

  return (
    <div className="page">
      {/* BONUS: render props support */}
      {typeof addArticle === "function" ? addArticle(addProps) : <AddArticle {...addProps} />}

      {typeof articleList === "function" ? (
        articleList(listProps)
      ) : (
        <ArticleList {...listProps} />
      )}
    </div>
  );
}