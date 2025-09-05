import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[80px]">
        {" "}
        {/* Adjust this value based on your header height */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
