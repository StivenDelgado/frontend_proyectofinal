import React from 'react'
import { GiReceiveMoney, GiStairsGoal } from 'react-icons/gi';
import { IoHomeOutline } from "react-icons/io5";
import duck from '../../assets/img/duuckOutLine.png'


export const NavigationBar = ({indexMenu}) => {
  const options = [
    { name: 'Home', icon: <IoHomeOutline />  },
    { name: 'Chat', icon: <img src={duck} alt="" className='w-5 h-5' /> },
    { name: 'Saveup', icon: <GiReceiveMoney />},
    { name: 'Goals', icon: <GiStairsGoal />}
  ]
  return (
    <div className='border-4 border-CerezaSuave w-[80%] m-auto rounded-3xl h-14 flex flex-row items-center justify-around'>
        {
          options.map((option, index) => (
            <div key={index} className={`${indexMenu === index ? "border-2 border-CerezaSuave " : "" } flex flex-row items-center space-x-2 p-2 rounded-2xl w-auto text-xl`}>
              {option.icon}
            </div>
          ))
        }
    </div>
  )
}
