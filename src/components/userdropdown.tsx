'use client'

import { useState } from "react";

const UserDropDown = () => {
    const[active,setActive] = useState<boolean>(false);

    const menuItems = ['Account settings', 'Support', 'License', 'Sign Out']

    return(
        <div className="relative inline-block text-left">
        <div className="hidden delay-[0ms] delay-[100ms] delay-[200ms] delay-[300ms] delay-[400ms] delay-[500ms] delay-[600ms] delay-[700ms] delay-[800ms] delay-[900ms]" />

        <div
        className={`${active? 'visible' : 'invisible'} absolute bottom-full z-10 mt-2 w-40 origin-bottom-right bg-transparent`}
      >
        <div className="py-2">
            {menuItems.map((item, index)=> {
                const delay = `delay-[${index * 100}ms]`;
                const reverseddelay = `delay-[${(menuItems.length - index)* 100}ms]`;
                
                return(
                    <a
                    key={index}
                    href="#"
                    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 transform transition-all duration-300 ease-out
                        ${active ? `opacity-100 translate-y-0 ${reverseddelay}`: `opacity-0 translate-y-4 ${delay}`}
                        `}
                    >
                    {item}
                    </a>
                );           
                })}
          </div>
        </div>
        <div className="flex items-center px-3">
            <div 
            onClick={ () => setActive(!active) }
            className={`transition-all duration-300 ease-out transform rounded-[100px] w-[40px] h-[40px] cursor-pointer
                    ${active? 'scale-110 rotate-180' : 'scale-100 rotate-0'}
                    bg-[url('/user.png')] bg-cover bg-center
                    `}>
            </div>
            <span
                className={`ml-2 transition-all duration-300 ease-out transform
                    ${active
                    ? 'visible opacity-100 translate-x-4 delay-[50ms]'
                    : 'invisible opacity-0 translate-x-0 delay-[0ms]'
                    } text-left text-sm text-gray-700`}
                >
                User
            </span>
            </div>
        </div>
        
    )
}

export default UserDropDown;