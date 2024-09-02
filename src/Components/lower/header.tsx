import Counter from "../resuable/counter";
import Logo from "./logo";


export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 col-[1/3] row-[1/2] bg-[#fbf5ed]  border-b border-black/[0.08] ">
      <Logo />
      <Counter />
    </header>
  );
}
