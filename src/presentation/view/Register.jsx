import React from 'react'

const Register = () => {
  return (
    <div class='bg-Hueso w-full h-full px-[3rem]'> 
        <h1 class='text-[3em] text-center font-bold '>SaveUp</h1>
        <span class='text-center '>!Que <span class='text-Cereza'>bacano</span> tenerte con nosotros¡ Juntos vamos a darle un orden a tus finanzas.</span>

        <form class='pt-[2rem]' action="">

            <label htmlFor="" class='font-bold pl-2' >Cedula / Tarjeta de identidad</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='Tu C.C / T.I aqui'/>

            <label htmlFor="" class='font-bold pl-2' >Nombre</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='¿Como te llamas?'/>

            <label htmlFor="" class='font-bold pl-2' >Apellidos</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='¿Como te apellidas?'/>

            <label htmlFor="" class='font-bold pl-2' >Correo Electronico</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='Ingresa tu correo'/>

            <label htmlFor="" class='font-bold pl-2' >Contraseña</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='Crea una contraseña segura'/>

            <label htmlFor="" class='font-bold pl-2' >Confirma tu contraseña</label>
            <input type="text" class='w-full block border-solid border-[2px] border-Cereza rounded-full px-[1rem] py-[0.5rem] mt-1 mb-4' placeholder='Repite tu contraseña'/>

            <button className='bg-Cereza py-[1rem] px-[2rem] rounded-full ml-[17%] font-bold text-[1.2em] mt-[2rem]' type="submit">! Registrame ¡</button>
        </form>
    </div>
  )
}

export default Register
