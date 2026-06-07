import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return ( 
    <div>
          <Navbar/>


          {/* sideBar template */}

          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[300px] bg-red-500">
              <Sidebar/>
            </div>

            <div className="p-5 flex flex-col gap-8 w-full w-full ">
              {children}
            </div>

          </div>


          {/* end sideBar template */}

    </div>
   );
}
 
export default MainLayout;