import { createContext, useEffect, useState } from "react";
import { Todo } from "../type/type";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { toast } from "react-toastify";

type ContextProviderProps = {
  children: React.ReactNode;
};
type TTodosContext = {
  todos: Todo[];
  Total: number;
  completed: number;
  handleAddTodo(todoText: string): void;
  handleToggoleTodo(id: number): void;
  handleDeleteTodo(id: number): void;
};

const getIntialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export const TodoContext = createContext<TTodosContext | null>(null);

export default function ContextProvider({ children }: ContextProviderProps) {
  // states
  const [todos, setTodos] = useState<Todo[]>(getIntialTodos);
  const { isAuthenticated } = useKindeAuth();
  // derived states
  const Total = todos.length;
  const completed = todos.filter((e) => e.isCompleted).length;

  // handlers
  function handleAddTodo(todoText: string) {
    if (todos.length >= 3 && !isAuthenticated) {
      toast.error("log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
      toast.success("Todo Added");
    }
  }
  function handleToggoleTodo(id: number) {
    setTodos(
      todos.map((t: any) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  }
  function handleDeleteTodo(id: number) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  // side effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider
      value={{
        todos,
        Total,
        completed,
        handleAddTodo,
        handleToggoleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
