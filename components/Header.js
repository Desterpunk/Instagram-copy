import React from 'react'
import Image from "next/image";

import {
    SearchIcon,
    PlusCircleIcon,
    UserAddIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/* left */}
                <div className="relative w-24 lg:inline-grid hidden cursor-pointer">
                    <Image src = "https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
                </div>
                
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src = "https://links.papareact.com/jjm" layout="fill" objectFit="contain"/>
                </div>
                {/* middle - Search input field*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black
                        focus:border-black" 
                        type="text" placeholder="Search"></input>
                    </div>
                </div>
                {/* right */}
            </div>
        </div>
    ) 
}

export default Header
