import { useContext } from "react";
import { TodoContext } from "../context/ContextProvider";

export function useTodosContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("failed to use context provider");
  }
  return context;
}
