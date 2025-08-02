'use client'

import Link from 'next/link'
import UserDropDown from './userdropdown';
import { useSession } from "next-auth/react"

const Sidebar = () => {
    const { data: session, status } = useSession()
    return(
        <div className="w-[240px] h-screen bg-gray-100 p-4 flex flex-col justify-between">
            <div className="space-y-6">
                <h1 className="text-xl font-semibold text-gray-800 px-3">LarasData</h1>

            <ul className="space-y-2 text-gray-700">
                <Link href='/dashboard'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Dashboard</li></Link>
                <Link href='/github-repos'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Github Repos</li></Link>
                <Link href='/draft'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Draft</li></Link>
                <Link href='/template'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Templates</li></Link>
                <Link href='/schedule'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Schedule</li></Link>
            </ul>
            </div>
            
            <UserDropDown data={session}/>
        </div>
    )
}

export default Sidebar;