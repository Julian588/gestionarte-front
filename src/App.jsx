import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LoginProvider from "./Context/loginContext";
import { Toaster } from "sonner";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <LoginProvider>
      <Toaster />
      <Header></Header>
      <main className="flex flex-col w-screen ">
        <AppRoutes />
      </main>
      <Footer></Footer>
    </LoginProvider>
  );
}

export default App;
