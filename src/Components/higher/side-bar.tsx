import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "../lower/add-todo-form";
import Button from "../resuable/button";

export default function SideBar() {
  const { login, register, logout, isAuthenticated, user, isLoading } =
    useKindeAuth();
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[15px] pt-4 pb-7">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? <>loading...</> : isAuthenticated ? (
          <>
            <p className="text-xs lg:text-sm ">Logged in as {user?.email}</p>
            <Button onClick={logout} buttonType="secondary">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Login
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
