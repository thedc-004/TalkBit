import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function homepage() {
  return (
    <div className="h-screen flex flex-col bg-bg-primary text-text-primary">
      <Header />
      <div className="flex w-screen h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default homepage;
