import { useTodosContext } from "../../lib/hooks/useTodosContext";

type DeleteTodoListProps = {
  id: number;
};

export default function DeleteBtn({ id }: DeleteTodoListProps) {
  const { handleDeleteTodo } = useTodosContext();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
