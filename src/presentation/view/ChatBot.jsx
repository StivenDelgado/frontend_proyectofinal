import React from 'react'
import { Chat } from '../components/Chat'
import { NavigationBar } from '../components/NavigationBar'
import quack from '../../assets/img/chatbot.png'
export const ChatBot = () => {
  return (
    <div className='h-screen'>
        <header className='bg-CerezaSuave w-full h-[20%] flex justify-center items-center'>
            <img src={quack} alt="" className='w-[90%] h-[90%] object-contain' />
        </header>
        <Chat/>
        <NavigationBar indexMenu={1}/>
    </div>
  )
}
