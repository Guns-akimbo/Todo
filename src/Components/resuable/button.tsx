type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => Promise<void>;
};

export default function Button({ onClick, buttonType, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] font-poppins bg-[#473a2b] hover:bg-[#322618] w-full rounded text-white cursor-pointer 
     ${buttonType === "secondary" ? "opacity-[85%]" : ""}`}
    >
      {children}
    </button>
  );
}
