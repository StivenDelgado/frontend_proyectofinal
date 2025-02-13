import React from 'react'
import { Input } from '../components/ui/Input'
import { CiCircleAlert } from "react-icons/ci";
import { Buttom } from '../components/ui/Buttom';
import { IoArrowBackCircleOutline } from "react-icons/io5";


const PasswordRecovery = () => {

  const submitForm = (e) =>{
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    console.log(formData);
  }

  return (
    <div className='bg-Hueso w-full h-full flex flex-col justify-center items-center py-41'>
      <header className='text-center flex flex-col items-center'>
        <div className='flex items-center fixed left-10 top-30'>
          <IoArrowBackCircleOutline className='text-Cereza text-2xl'/>
          <p className='font-semibold text-center text-Granito text-[20px] pl-1'>Atrás</p>
        </div>
        <h2 className='text-6xl py-2 text-Granito' >SaveUp</h2>
        <p className='flex pt-5 text-Granito'>Se te fue la paloma con la <p className='text-Cereza pl-1'>  contraseña</p>, ¿no?</p>
        <p className='pb-20 text-Granito'>No pasa nada, ingresa tu correo y te ayudamos a solucionarlo</p>
      </header>

      <form className='w-full h-full flex flex-col items-center pb-20' onSubmit={(e)=>submitForm(e)}>
        <div className='px-[24%]'>
          <label className='text-Granito text-2x1 pl-3 font-bold' htmlFor="">Correo electronico</label>
          <Input name="correo" type="email" placeholder="Tu correo aqui"/>
        </div>

        <div className='px-[15%] pb-20 flex items-center'>
          <CiCircleAlert className='text-Granito text-3xl'/>
          <p className='w-full text-Granito'>Te enviaremos un enlace para el restablecimiento de tu contraseña.</p>
        </div>

        <Buttom style="text-Hueso" buttonName="Cambiar contraseña" type="submit" />
      </form>

    </div>
  )
}

export default PasswordRecovery
