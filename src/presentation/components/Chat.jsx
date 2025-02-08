import React, { useState } from 'react'

export const Chat = () => {
  const [messages, setMessages] = useState([ { text: "Soy QuackCash, tu parcero financiero. Cuéntame en qué andás gastando y te doy sugerencias pa’ que tu plata rinda más. Desde manejar tus gastos hasta armarte un plan de ahorro bien bacano. ¡Hablemos y pongamos esa billetera en orden!", role: 'bot' }])
  
  const handleInput = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      setMessages([...messages, { text: e.target.value, role: 'user' }])
      e.target.value = ''
    }
  }

  return (
    <div className='flex flex-col items-center space-y-2 border-4 border-CerezaSuave rounded-3xl w-[80%] h-[60%] m-auto my-10 p-2'>
      <div className='flex flex-col w-[90%] h-[90%] overflow-y-scroll space-y-6 '>
        {messages.map((message, index) => (
          <div key={index} className={`flex flex-row items-center space-x-2 ${message.role === "user" ? "bg-Granito self-end text-Hueso" : "self-start text-Granito"} p-3 rounded-2xl w-auto`}>
            {message.text}
          </div>
        ))}
      </div>
      <input type="text" onKeyUp={(e) => handleInput(e)} className='bg-Granito w-[90%] p-3 rounded-2xl text-Hueso border-0' />
    </div>
  )
}
