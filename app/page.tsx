import Image from "next/image";

import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle";
import { DashBoardCard } from "@/components/Dashboard/DashBoardCard";
import {  Folders, MessageCircle, Newspaper, Users } from "lucide-react"
import { DashBoardTable } from "../components/Dashboard/DashBoardTable";
export default function Home() {
  
  return (

    <>

{/* card tempalte and and dynamic dashboard card  */}

    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      
      <DashBoardCard title='Posts' count={100} icon={<Newspaper className="text-slate-500" size={72}/>}/>
          
      <DashBoardCard title='Users' count={13} icon={<Users className="text-slate-500" size={72}/>}/>
          
      <DashBoardCard title='Categories' count={20} icon={<Folders className="text-slate-500" size={72}/>}/>
          
      <DashBoardCard title='Messages' count={100} icon={<MessageCircle className="text-slate-500" size={72}/>}/>
    
    </div>

{/* end  card tempalte and and dynamic dashboard card  */}

<DashBoardTable/>




     <div className="min-h-screen flex items-center justify-center 
     bg-white text-black dark:bg-black dark:text-white  transition-all duration-300
     ">
      <div className="max-w-3xl text-center space-y-10">
     <h1 className="text-6xl font-semibold ">nextjs Dark Mode tutorial </h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sequi unde dolorum blanditiis quidem, tempora minus? Qui, earum doloribus. Unde et pariatur porro odio ad soluta magnam voluptates molestias corporis!</p>   
      
      <div className="space-x-2">
      <Button variant="outline">Button1</Button>
      <Button variant="secondary">Button2</Button>
      </div>
      <ThemeToggle/>
      </div>
     </div>
   </>
  );
}
