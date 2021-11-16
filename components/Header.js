import React from 'react'
import Image from "next/image";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/* left */}
                <div className="relative  h-24 w-24 lg:inline-grid hidden cursor-pointer">
                    <Image src = "https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
                </div>
                
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src = "https://links.papareact.com/jjm" layout="fill" objectFit="contain"/>
                </div>
                {/* middle */}
                {/* right */}
            </div>
        </div>
    )
}

export default Header
