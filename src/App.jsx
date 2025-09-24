import React, { useState } from "react";
import Input from "./components/Input";
import Label from "./components/Labels";
import Button from "./components/Button";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Mandi",
      isComplete: false,
    },
  ]);

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) =>
      prev.concat([
        {
          title: todo,
          isComplete: false,
        },
      ])
    );
    setTodo("");
  };
  return (
    <div className=" min-h-screen flex justify-center items-center flex-col gap-5">
      <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-1">
          <Label>Todo</Label>
          <Input
            placeholder="Input Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <Button label={"Submit"} />
      </form>

      <div className=" flex flex-col gap-4 w-[400px] shadow rounded-md p-2">
        {todos.map((item) => (
          <Todo {...item} />
        ))}
      </div>
    </div>
  );
}
