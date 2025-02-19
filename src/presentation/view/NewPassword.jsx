import React from 'react'
import { Input } from '../components/ui/Input'
import { CiCircleAlert } from "react-icons/ci";
import { Buttom } from '../components/ui/Buttom';
import { toast } from 'sonner';

export const NewPassword = () => {
    const submitForm = (e) =>{
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const formData = Object.fromEntries(data.entries())
        if(formData.password != formData.passwordconfirm){
            toast.error("Las contraseñas deben de coincidir para realizar el cambio")
        }
    }
  return (
    <div className='bg-Hueso w-full h-full flex flex-col justify-center items-center py-41'>
          <header className='text-center flex flex-col items-center'>

            <h2 className='text-6xl py-19 text-Granito' >SaveUp</h2>

          </header>
    
          <form className='w-full h-full flex flex-col items-center' onSubmit={(e)=>submitForm(e)}>
            <div className='px-[24%]'>
              <label className='text-Granito text-2x1 pl-3 font-bold' htmlFor="">Nueva contraseña</label>
              <Input name="password" type="password" placeholder="Tu nueva contraseña"/>
              <label className='text-Granito text-2x1 pl-3 font-bold' htmlFor="">Repite contraseña</label>
              <Input name="passwordconfirm" type="password" placeholder="Repite tu contraseña"/>
            </div>
    
            <div className='px-[5%] py-11 flex items-center'>
              <CiCircleAlert className='text-Granito text-5xl'/>
              <p className='w-full text-Granito'>Una vez ingresada tu nueva contraseña, serás redirigido a la página principal para que puedas iniciar sesión.</p>
            </div>
    
            <Buttom style="text-Hueso" buttonName="Cambiar contraseña" type="submit" />
          </form>
    
    </div>
  )
}
