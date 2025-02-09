import React from 'react'
import { Input } from '../components/ui/Input'
import { CiCircleAlert } from "react-icons/ci";
import { Buttom } from '../components/ui/Buttom';

const PasswordRecovery = () => {
  return (
    <div className='bg-Hueso w-full h-full flx flex-col justify-center items-center'>
      <header className='text-center flex flex-col items-center'>
        <h2 className='text-6xl py-2 text-Granito' >SaveUp</h2>
        <p className='flex pt-5 text-Granito'>Se te fue la paloma con la <p className='text-Cereza pl-1'>  contraseña</p>, ¿no?</p>
        <p className='pb-5 text-Granito'>No pasa nada, ingresa tu correo y te ayudamos a solucionarlo</p>
      </header>

      <form className='w-full flex flex-col items-center' action="">
        <div className='px-[24%]'>
          <label className='text-Granito text-2x1 pl-3' htmlFor="">Correo electronico</label>
          <Input name="correo" type="email" placeholder="Tu correo aqui"/>
        </div>

        <div className='px-[15%] py-20 flex items-center'>
          <CiCircleAlert className='text-Granito text-3xl'/>
          <p className='w-full text-Granito'>Te enviaremos un enlace para el restablecimiento de tu contraseña.</p>
        </div>

        <Buttom style="" buttonName="Cambiar contraseña" type="submit" />
      </form>

    </div>
  )
}

export default PasswordRecovery
