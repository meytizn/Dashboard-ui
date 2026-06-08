"use client"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { CreditCard, Folders, LayoutDashboard, Newspaper, Settings2Icon, User } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { MainContext } from "./(context)/MainContext";
import { Button } from "./ui/button";



const Sidebar = () => {

    const data = useContext(MainContext)
    console.log(data)

    return (
        <>
                         
        <Command className="max-w-sm border bg-secondary rounded-none ">
       
        <Button className="md:hidden block" onClick={()=>data?.setPhone(!data.phone)}> {data?.phone ? "is on" : "not on"}</Button>
       
       
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>


                {/* Suggestions items */}

                <CommandGroup heading="Suggestions">

                    <CommandItem>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <Link href='/'>Dashboard</Link>
                    </CommandItem>


                    <CommandItem>
                        <Newspaper className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Posts</Link>
                    </CommandItem>


                    <CommandItem>
                        <Folders className="mr-2 h-4 w-4" />
                        <Link href='/posts'>Categories</Link>
                    </CommandItem>


                </CommandGroup>


                {/* end  Suggestions items */}



                <CommandSeparator />

                


                {/* Settings items */}

                <CommandGroup heading="Settings">


                    <CommandItem>

                        <User className="mr-2 h-4 w-4" />
                        
                        <Link href='/auth'>
                        <span>Profile</span>
                        </Link>
                        <CommandShortcut>ctrl+P</CommandShortcut>
                    </CommandItem>


                    <CommandItem>

                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <CommandShortcut>ctrl+B</CommandShortcut>
                    </CommandItem>



                    <CommandItem>


                        <Settings2Icon className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>ctrl+S</CommandShortcut>

                    </CommandItem>



                </CommandGroup>


                {/* end Settings items */}


            </CommandList>
        </Command>
        </>
    );
}

export default Sidebar;