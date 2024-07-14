import React from 'react'

const Chat = () => {
    return (
        <div className=' bg-[url(https://as2.ftcdn.net/v2/jpg/01/38/39/89/1000_F_138398962_7rgoDJi9t6Pnt7PhKB0iXBYIalgglHwi.jpg)]  border-l-2 border-[#262626]  w-[100%] md:w-[75%]  '>
            <div className='bg-[#1a1a1a] p-1 h-[65px] z-50 sticky top-0 '>
                <div
                    className={ `py-1 text-white w-full p-1 rounded-md max-h-[70px] flex gap-4 items-center cursor-pointer ` }
                >
                    <div className="relative">
                        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <span className="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div>
                        <p className=' font-semibold '>Telegram Group</p>
                        <p className=' text-gray-400'>410000 <b className=' font-medium'>subscribed</b></p>
                    </div>
                </div>
            </div>

            <div className=' text-black bg-slate-50 bg-gradient-to-r  from-violet-300 to-fuchsia-300  z-40 w-[100%] m-auto   relative  p-3 h-[90%]    lg:w-[78%] ' id='Hidede'>
                <div className=' bg-white  p-3 absolute   text-lg rounded-r-lg  min-w-[300px] w-[300px]   '>
                    <p className=' font-semibold'>Hey 🙋🏻‍♂️ </p>
                </div>
                <div className=' bg-white  right-3 top-[8%] p-3 absolute   text-lg rounded-l-lg  min-w-[300px] w-[300px]   '>
                    <p className=' font-semibold'>Hello Please reply</p>
                </div>
                <div className=' bg-white  top-[20%] p-3 absolute   text-lg rounded-r-lg  min-w-[300px] w-[300px]   '>
                    <p className=' font-semibold'>Cool</p>
                </div>
                <div className=' bg-white  top-[30%] p-3 absolute right-2   text-lg rounded-l-lg  min-w-[300px] w-[300px]   '>
                    <p className=' font-semibold'>Okey bye </p>
                </div>
            </div>
        </div>
    )


}

export default Chat