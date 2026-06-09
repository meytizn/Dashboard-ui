"use client"
import React, { useContext } from 'react'
import Image from "next/image";
import Link from "next/link"
import logo from '../img/logo.png'
import mahdi from '../img/mahdi.jpg'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggle from '@/app/theme-toggle';
import { MainContext } from './(context)/MainContext';
import { LayoutDashboard } from 'lucide-react';



const Navbar = () => {
    const data = useContext(MainContext)
    return (
        <div className='w-full min-h-13 py-2 px-5 flex items-center justify-between dark:bg-[#262626] bg-gray-700 text-white'>




            <div className='flex flex-row gap-x-8 justify-between items-center'>

                <Link href="https://www.linkedin.com/in/mahdi-zamanian-150696231/">
                    <Image className='rounded-full' src={mahdi} alt="dashboard" width={50} />
                </Link>

               
                 <button  className='md:hidden text-2xl ' onClick={()=>data?.setPhone(!data.phone)}>
                    
                     {data?.phone ? "X" : <LayoutDashboard className="mr-2 h-6 w-6"  /> }
                     
                     </button>
                        

            </div>




        <div className='flex flex-row gap-3 justify-between items-center'>

  <ThemeToggle />



            <DropdownMenu>

                <DropdownMenuTrigger className='focus:outline-none'>




                    <Avatar>
                        <AvatarImage
                            src={"https://github.com/shadcn.png"}
                            alt="@shadcn"
                            className="grayscale"
                        />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>






                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>


                        <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
                        <DropdownMenuItem><Link href='https://www.linkedin.com/in/mahdi-zamanian-150696231/'>About</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href='/auth'>Account</Link></DropdownMenuItem>





                    </DropdownMenuGroup>

                    {/* <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup> */}

                </DropdownMenuContent>
            </DropdownMenu>




                </div>



        </div>
    )
}

export default Navbar
