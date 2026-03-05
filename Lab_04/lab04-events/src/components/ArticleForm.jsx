import { useState } from "react";
import ReusableButton from "./ReusableButton";
import TextInput from "./TextInput";

export default function ArticleForm({ onAddArticle }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ synthetic event + preventDefault
    const cleanTitle = title.trim();
    const cleanContent = content.trim();

    if (!cleanTitle || !cleanContent) return;

    onAddArticle({
      id: crypto.randomUUID(),
      title: cleanTitle,
      content: cleanContent,
      createdAt: new Date().toLocaleString(),
      likes: 0,
    });

    // ✅ reset (controlled form)
    setTitle("");
    setContent("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Article (Controlled Form)</h2>

      <TextInput
        label="Title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // ✅ onChange handler
        placeholder="Enter article title"
      />

      <div className="field">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)} // ✅ onChange handler
          placeholder="Write something..."
          className="textarea"
          rows={4}
        />
      </div>

      <div className="row">
        <ReusableButton
          type="submit"
          label="Add"
          disabled={!title.trim() || !content.trim()}
        />
        <span className="hint">Submit uses preventDefault()</span>
      </div>
    </form>
  );
}
