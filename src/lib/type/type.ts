export type Todo = {
  id: number;
  isCompleted: boolean;
  text: string;
};

export type TodoListProps = {
  todos: Todo[];
  handleToggoleTodo(id: number): void;
  handleDeleteTodo(id: number): void;
};

export type MainbodyProps = {
  todos: Todo[];
  Total: number;
  completed: number;
  handleAddTodo(todoText: string): void;
  handleToggoleTodo(id: number): void;
  handleDeleteTodo(id: number): void;
};
