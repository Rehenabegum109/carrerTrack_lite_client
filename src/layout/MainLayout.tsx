import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";


const MainLayout = () => {
  return (
     <>
      <Navbar/>
      <main className="min-h-screen">
        <Outlet />
       
      </main>
       <Footer/>
    </>
  );
};

export default MainLayout;