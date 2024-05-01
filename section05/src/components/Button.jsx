import React from "react";

// 구조분해 할당
export default function Button({ text, color, children }) {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
};
