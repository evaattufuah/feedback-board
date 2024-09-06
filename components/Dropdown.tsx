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

import React from 'react'

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-inherit font-extrabold text-3xl">=</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">

        <DropdownMenuLabel className="text-2xl  text-greey justify-end flex">X</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            22
            <div className='uppercase border-b border-white  text-bluee font-bold hidden sm:flex'>
              <div className=' sm:gap-2 sm: flex-col sm:h-[485px]  sm:w-[225px] p-3 pt-5 shadow-lg  sm:bg-white text-xs'>
                <div className='sm:h-[185px] flex-wrap  flex gap-2 sm:w-[205px]'>
                  <div className=''>
                    <Link href='/' className="hover:bg-blue-500 hover:text-white  bg-light  p-3 rounded ">
                      ALL
                    </Link>
                  </div>
                  <div className=''>
                    <Link href='/' className="hover:bg-blue-500 bg-light p-3 rounded hover:text-white  ">
                      UI
                    </Link>
                  </div>
                  <div>
                    <Link href='/contact' className="hover:bg-blue-500 hover:text-white  bg-light p-3 rounded">UX</Link>
                  </div>
                  <div className=''>
                    <Link href='/' className="hover:bg-blue-500 hover:text-white  rounded bg-light p-3">Enhancement</Link>
                  </div>
                  <div><Link href='/' className="hover:bg-blue-500  hover:text-white  rounded bg-light p-3 ">Bug</Link>
                  </div>
                  <div> <Link href='/contact' className="hover:bg-blue-500 hover:text-white  bg-light p-3 rounded">Features</Link></div>
                </div>
                {/* next */}
                <div className='sm:h-[185px] mt-6 flex-col flex  sm:w-[205px]'>
                  <div className='flex gap-11 mb-6 '>

                    <p className="hover:bg-blue-500 text-dark text-lg">
                      Roadmap
                    </p>
                    <p className="hover:bg-blue-500 text-blue-400 mt-2">
                      View
                    </p>
                  </div>
                  <div className='flex gap-9 text-base font-normal mb-2'>
                    <p className='rounded bg-orangee p-1 h-[8px] w-[8px] mt-2'></p>
                    <p className="hover:bg-blue-500 text-greey ">
                      Planned
                    </p>
                    <p className="hover:bg-blue-500  text-blue-400">
                      2
                    </p>
                  </div>
                  <div className='flex gap-5 text-base font-normal mb-2'>
                    <p className='rounded bg-pluee p-1 h-[8px] w-[8px] mt-2'></p>
                    <p className="hover:bg-blue-500 text-greey ">
                      In-Progress
                    </p>
                    <p className="hover:bg-blue-500 text-blue-400">
                      3
                    </p>
                  </div>
                  <div className='flex gap-10 text-base font-normal mb-2 '>
                    <p className='rounded bg-skye p-1 h-[8px] w-[8px] mt-2'></p>
                    <p className="hover:bg-blue-500  text-greey ">
                      Live
                    </p>
                    <p className="hover:bg-blue-500 text-blue-400 ml-8">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <p className="hover:bg-blue-500 text-blue-400 ml-8">
              1
            </p>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>

            \
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuDemo

