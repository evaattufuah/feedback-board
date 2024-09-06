

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function DropdownMenuDemo1() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="  text-[#F2F4FE] font-thin cursor-pointer text-sm"> Sort by:Most Upvotes</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">


                <DropdownMenuItem>
                    <div className="mr-2 h-4 w-4 text-lg" />
                    <span>Most  Upvotes</span>

                </DropdownMenuItem>
               

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                      

                    </DropdownMenuItem>
                  
                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>Least Upvotes</span>
                     
                    </DropdownMenuItem>
                    
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>Most Comments</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  
                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4" />
                        <span>Least Comments</span>
                     
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuSeparator />
             
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
