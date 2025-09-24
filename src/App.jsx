import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Label from "./components/Labels";
import Button from "./components/Button";
import Todo from "./components/Todo";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
  ]);

  const [todo, setTodo] = useState("");
  const [todoSelected, setTodoSelected] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoSelected !== undefined) {
      setTodos((prev) =>
        prev.map((todoP, todoIndex) =>
          todoIndex === todoSelected.index ? { ...todoP, title: todo } : todoP
        )
      );
      setTodoSelected(undefined);
      return;
    } else {
      // setTodos((prev) =>
      //   prev.concat([
      //     {
      //       title: todo,
      //       completed: false,
      //     },
      //   ])
      // );

      handleAdd();
    }

    setTodo("");
  };

  const handleAdd = async () => {
    const response = await axios.post(`http://localhost:3000/todos`, {
      userId: 1,
      id: todos.length + 1,
      title: todo,
      completed: false,
    });
  };
  const getTodos = async () => {
    const response = await axios.get("http://localhost:3000/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

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
        {todos.map((item, index) => (
          <Todo
            {...item}
            toogleTodo={(status) => {
              setTodos((prev) =>
                prev.map((todo, todoIndex) =>
                  todoIndex === index ? { ...todo, completed: status } : todo
                )
              );
            }}
            onHapus={() => {
              // setTodos((prev) =>
              //   prev.filter((todo, todoIndex) => todoIndex !== index)
              // );
              handleDelete(item.id);
            }}
            onEdit={() => {
              setTodoSelected({
                index,
                todo,
              });
              setTodo(item.title);
            }}
          />
        ))}
      </div>
    </div>
  );
}
