import React from 'react'

export const Input = ({type, placeholder, name}) => {
  return (
    <input type={type} name={name} class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4 ' placeholder={placeholder}/>
  )
}