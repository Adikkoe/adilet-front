import { useState } from "react";

export default function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault(); // toggle үшін міндетті
    setIsOpened((prev) => !prev);
  };

  return (
    <li className="item">
      <div className="itemRow">
        <a
          href={`#${article.id}`}
          title="Toggle Summary"
          onClick={onClickToggle}
          className="link"
        >
          {article.title}
        </a>

        <button className="remove" onClick={() => onClickRemove(article.id)}>
          ×
        </button>
      </div>

      <p className="summary" style={{ display: isOpened ? "block" : "none" }}>
        {article.summary}
      </p>
    </li>
  );
}