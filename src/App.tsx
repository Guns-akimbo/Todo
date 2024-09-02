import BackgroundHeading from "./Components/lower/Backgroundheading";
import Footer from "./Components/lower/footer";
import Mainbody from "./Components/higher/mainbody";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function App() {
  const { isAuthenticated, isLoading } = useKindeAuth();

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : isAuthenticated ? (
        <div className="w-full flex-col flex justify-center items-center font-poppins bg-[#f1d4b3] min-h-screen p-2">
          <BackgroundHeading />
          <Mainbody />
          <Footer />
        </div>
      ) : (
        <div className="w-full flex-col flex justify-center items-center font-poppins bg-[#f1d4b3] min-h-screen p-2">
          <BackgroundHeading />
          <Mainbody />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
