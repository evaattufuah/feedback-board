

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

export function DropdownMenuDemo3() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="  text-black text-base bold cursor-pointer ">Planned</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">


                <DropdownMenuItem>
                    <div className="mr-2 h-4 w-4 text-lg" />
                    <span>Suggestion</span>

                </DropdownMenuItem>


                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>


                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>Planned</span>

                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>In-Progress</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <div className="mr-2 h-4 w-4" />
                        <span>Live</span>

                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
