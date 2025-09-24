import React from "react";

export default function Button({ label, isLoading, ...props }) {
  return (
    <button className=" rounded-md bg-green-500  px-2 py-1" {...props}>
      {isLoading ? "Loading" : label}
    </button>
  );
}
