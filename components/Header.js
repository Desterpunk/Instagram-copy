import React from 'react'
import Image from "next/image";

import {
    SearchIcon,
    PlusCircleIcon,
    UserAddIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    UserGroupIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
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
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex 
                        items-center justify-center animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img src="https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg" alt="profile pic" 
                    className="h-10 rounded-full cursor-pointer"></img>

                </div>
 
            </div>
        </div>
    ) 
}

export default Header
