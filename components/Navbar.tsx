import React from 'react'
import Image from "next/image";
import Link from "next/link"
import logo from '../img/logo.png'
import { Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
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



const Navbar = () => {
  return (
    <div className='w-full min-h-13 py-2 px-5 flex items-center justify-between dark:bg-red-800 bg-black text-white'>
      <Link  href="/">
      <Image className='rounded-full' src={logo} alt="dashboard" width={50} />
      </Link>


 
      





<DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-none'>



     
          <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>AC</AvatarFallback>
    </Avatar>





  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>


      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem><Link href='/profile'>Profile</Link></DropdownMenuItem>
      <DropdownMenuItem><Link href='/auth'>Logout</Link></DropdownMenuItem>





    </DropdownMenuGroup>

    {/* <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup> */}

  </DropdownMenuContent>
</DropdownMenu>


    </div>
  )
}

export default Navbar
