import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import Profile from './profile';

const Sidebar = () => {
    const [selectedProfileId, setSelectedProfileId] = useState(null);

    const profiles = [1, 2]; // Example profile IDs

    const handleProfileClick = (id) => {
        setSelectedProfileId(id);
    };
    return (
        <div className='sticky top-0 z-10 bg-[#1a1a1a] w-[100%] min-w-[350px] min-h-[100vh] md:w-[25%]'>
            <div className=' flex justify-around   gap-4 items-center py-1 '>
                <MdOutlineMenu size={ 34 } className=' ml-6  text-gray-400 cursor-pointer' />
                <input type="text" placeholder='Search' className=' ml-3 mr-4 w-full p-2  rounded-3xl outline-none px-10 bg-[#232323]  text-white   ' />
            </div>
            <div className='m-2 flex flex-col gap-1 p-1'>
                { profiles.map((id) => (
                    <Profile
                        key={ id }
                        id={ id }
                        isSelected={ id === selectedProfileId }
                        onClick={ handleProfileClick }
                    />
                )) }
            </div>
        </div>
    )
}

export default Sidebar