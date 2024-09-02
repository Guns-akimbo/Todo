import { useTodosContext } from "../../lib/hooks/useTodosContext";

export default function Counter() {
  const { completed, Total } = useTodosContext();
  return (
    <p>
      <b>{completed}</b>/{Total} todos completed
    </p>
  );
}
