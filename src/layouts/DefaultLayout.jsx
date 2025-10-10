import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const DefaultLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        pageTitle="fitback"
        isSidebarOpen={open}
        toggleSidebar={toggleDrawer}
      />
      <Sidebar
        isSidebarOpen={open}
        toggleSidebar={toggleDrawer}
      />
      <main className="flex-grow max-w-7xl w-full mx-auto">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
