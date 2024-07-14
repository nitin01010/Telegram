import React from 'react';

const Profile = ({ id, isSelected, onClick }) => {
    return (
        <div
            className={ `py-4 text-white w-full p-2 rounded-md max-h-[70px] flex gap-4 items-center cursor-pointer ${isSelected ? 'bg-purple-500' : ''} hover:${isSelected ? 'bg-purple-500' : 'bg-[#232323]'} ` }
            onClick={ () => onClick(id) }
        >
            <div className="relative">
                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div>
                <p className=' font-semibold'>Telegram Group { id } </p>
                <p className=' text-white'>Hey</p>
            </div>
        </div>
    );
};

export default Profile;