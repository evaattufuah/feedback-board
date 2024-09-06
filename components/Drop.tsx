"use client"
import React, { useState } from "react";
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo2({ onSelect }: { onSelect: (item: string) => void }) {
    const [selectedItem, setSelectedItem] = useState<string>("Features");

    const handleSelect = (item: string) => {
        setSelectedItem(item);
        onSelect(item); 
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <p className="text-black text-base bold cursor-pointer">{selectedItem}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
                <DropdownMenuItem onClick={() => handleSelect("Features")}>
                    <div className="mr-2 h-4 w-4 text-lg" />
                    <span>Features</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleSelect("UI")}>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>UI</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => handleSelect("UX")}>
                        <div className="mr-2 h-4 w-4 text-lg" />
                        <span>UX</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleSelect("Enhancement")}>
                        <div className="mr-2 h-4 w-4" />
                        <span>Enhancement</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSelect("Bug")}>
                    <div className="mr-2 h-4 w-4" />
                    <span>Bug</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
