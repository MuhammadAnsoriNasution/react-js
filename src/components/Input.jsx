import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      className=" h-10 rounded-sm px-3 py-2 border outline-none"
      type="text"
      {...props}
    />
  );
}
