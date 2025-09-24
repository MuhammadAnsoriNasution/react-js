import React from "react";

export default function Todo({ title, isComplete, toogleTodo }) {
  return (
    <div className=" flex gap-2 items-center">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={(e) => toogleTodo(e.target.checked)}
      />
      <p>{title}</p>
    </div>
  );
}
