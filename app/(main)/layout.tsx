"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { AppDataProvider, MainContext } from "../../components/(context)/MainContext";
import { useContext } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const data = useContext(MainContext)
  console.log(data)
  return (
    <>

      <div>
        <Navbar />


        {/* sideBar template */}

        <div className="flex">

          {/* phone sidebar true */}

          {data?.phone && (
            <div className={`fixed z-1 top-0 bottom-0  left-0 right-0
                transform transition-transform duration-300 ease-out
                
              
              `}>

              <Sidebar />
            </div>
          )}


          {/*end  phone sidebar true */}


          <div className={`hidden md:block h-[100vh] md:w-[300px] `}>
            <Sidebar />
          </div>



          <div className="p-5 flex flex-col gap-8 w-full w-full ">
            {children}
          </div>

        </div>


        {/* end sideBar template */}

      </div>

    </>
  );
}

export default MainLayout;