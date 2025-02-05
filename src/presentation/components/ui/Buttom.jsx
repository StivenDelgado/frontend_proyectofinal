import React from 'react'
import { useState } from 'react'
export const Buttom = ({buttonName, url}) => {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(num + 1);
        console.log(num);
    }

  return (
    <button onClick={handleClick} class='bg-[#d01e23] text-white rounded-full p-10 cursor-pointer'>
        <a href={url}>
            <p>{buttonName}</p>
        </a>
    </button>
  )
}
