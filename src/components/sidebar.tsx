import Link from 'next/link'
import UserDropDown from './userdropdown';

const Sidebar = () => {
    return(
        <div className="w-[240px] h-screen bg-gray-100 p-4 flex flex-col justify-between">
            <div className="space-y-6">
                <h1 className="text-xl font-semibold text-gray-800 px-3">LarasData</h1>

            <ul className="space-y-2 text-gray-700">
                <Link href='/dashboard'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Dashboard</li></Link>
                <Link href='/inbox'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Inbox</li></Link>
                <Link href='/teams'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Teams</li></Link>
                <Link href='/dashboard'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Assigned to me</li></Link>
                <Link href='/dashboard'><li className="hover:bg-gray-200 px-3 py-2 cursor-pointer">Created by me</li></Link>
            </ul>
            </div>
            
            <UserDropDown/>
        </div>
    )
}

export default Sidebar;