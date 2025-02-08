import React from 'react'
import { GiDuck, GiReceiveMoney, GiStairsGoal } from 'react-icons/gi';
import { IoHomeOutline } from "react-icons/io5";

export const NavigationBar = ({indexMenu}) => {
  const options = [
    { name: 'Home', icon: <IoHomeOutline />  },
    { name: 'Chat', icon: <GiDuck />},
    { name: 'Saveup', icon: <GiReceiveMoney />},
    { name: 'Goals', icon: <GiStairsGoal />}
  ]
  return (
    <div className='border-4 border-CerezaSuave w-[80%] m-auto rounded-3xl h-14 flex flex-row items-center justify-around'>
        {
          options.map((option, index) => (
            <div key={index} className={`${indexMenu === index ? "bg-CerezaSuave text-white" : "" } flex flex-row items-center space-x-2 p-3 rounded-2xl w-auto text-xl`}>
              {option.icon}
            </div>
          ))
        }
    </div>
  )
}
