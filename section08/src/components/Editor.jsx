import React, { useState, useRef } from "react";
import "./Editor.css";

export default function Editor({ OnCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = e => {
    setContent(e.target.value);
  };

  const onKeydown = e => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };

  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    OnCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
}
