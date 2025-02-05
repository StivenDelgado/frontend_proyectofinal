import React from 'react'
import { Buttom } from '../components/ui/Buttom'

export const Home = () => {
  return (
    <div>
        <Buttom buttonName="registro" url={"https://reactrouter.com/start/library/routing"}/>
        <Buttom buttonName="login" url={"https://tailwindcss.com/docs/installation/using-vite"}/>
    </div>
  )
}
