"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { MainContext } from "../../components/(context)/MainContext";
import { useContext } from "react";
import "../../app/globals.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const data = useContext(MainContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex relative">

        {/* Mobile Sidebar Overlay */}
        <div
          className={`
            fixed top-0 left-0 h-full w-[280px] z-50
            bg-white shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${data?.phone ? "translate-x-0" : "-translate-x-full"}
            md:hidden
          `}
        >
          <Sidebar />
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-[300px] h-screen">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col gap-8">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;