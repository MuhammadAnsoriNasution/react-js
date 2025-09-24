import React from "react";

export default function Todo({ title, isComplete }) {
  return (
    <div className=" flex gap-2 items-center">
      <input type="checkbox" checked={isComplete} />
      <p>{title}</p>
    </div>
  );
}
