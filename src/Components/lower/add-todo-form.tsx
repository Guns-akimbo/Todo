import { useState } from "react";
import { useTodosContext } from "../../lib/hooks/useTodosContext";
import Button from "../resuable/button";
import { toast } from "react-toastify";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todoText === "") {
      toast.error("kindly fill in a Todo ");
      return;
    }
    handleAddTodo(todoText);
    setTodoText("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        className="h-[45px] border border-black/[12%] rounded my-2 text-base block w-full outline-none p-3 "
      />
      <Button>Add Todo</Button>
    </form>
  );
}
