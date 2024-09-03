import { Todo } from "../../lib/type/type";
import DeleteBtn from "../lower/delete-btn";
import { useTodosContext } from "../../lib/hooks/useTodosContext";

export default function TodoList() {
  const {todos, handleToggoleTodo} = useTodosContext();
  return (
    <ul className=" overflow-auto mb-4">
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center lg:text-xl font-bold">
           Add New Todo 
        </li>
      )}
      {todos.map((todo: Todo) => (
        <li
          onClick={() => handleToggoleTodo(todo.id)}
          className="flex justify-between items-center px-4 h-14 cursor-pointer text-base border-b border-black/[8%] "
          key={todo.id}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}  break-words w-48 lg:w-[80%] text-sm lg:text-[15px]`}
          >
            {todo.text}
          </span>
          <DeleteBtn  id={todo.id} />
        </li>
      ))}
      
    </ul>
  );
}
45;
