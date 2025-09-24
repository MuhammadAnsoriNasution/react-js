import React from "react";

export default function Todo({
  title,
  isComplete,
  toogleTodo,
  onHapus,
  onEdit,
}) {
  return (
    <div className=" flex gap-2 items-center justify-between">
      <div className=" flex flex-row items-center gap-1">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={(e) => toogleTodo(e.target.checked)}
        />
        <p>{title}</p>
      </div>
      <div className=" flex flex-row items-center gap-1">
        <button onClick={onEdit}>Edit</button>
        <button className=" text-red-500" onClick={onHapus}>
          Hapus
        </button>
      </div>
    </div>
  );
}
