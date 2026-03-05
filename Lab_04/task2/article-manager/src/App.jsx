import "./App.css";
import ArticleManager from "./components/ArticleManager";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";

export default function App() {
  return (
    <div className="page">
      <h1>Lab 4.2 — Article Manager (Refactoring)</h1>

      {/* Render Props (bonus) */}
      <ArticleManager
        addArticle={(props) => <AddArticle {...props} />}
        articleList={(props) => <ArticleList {...props} />}
      />
    </div>
  );
}