import Header from "../lower/header";
import SideBar from "./side-bar";
import TodoList from "./TodoList";

export default function Mainbody() {
  return (
    <main className="relative w-full h-[750px] lg:w-[900px] lg:h-[530px] bg-white  rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[50px_1fr] overflow-hidden ">
      <Header />
      <TodoList />
      <SideBar />
    </main>
  );
}
