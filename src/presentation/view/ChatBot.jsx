import React from 'react'
import { Chat } from '../components/Chat'
import { NavigationBar } from '../components/NavigationBar'

export const ChatBot = () => {
  return (
    <div className='h-screen'>
        <header className='bg-CerezaSuave w-full h-[20%]'>
            <img src="" alt="" />
        </header>
        <Chat/>
        <NavigationBar indexMenu={1}/>
    </div>
  )
}
