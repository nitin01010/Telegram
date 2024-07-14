import React from 'react'
import Chat from './chat'
import Sidebar from './sidebar'

const Main = () => {
    return (
        <div className='flex bg-black '>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Main