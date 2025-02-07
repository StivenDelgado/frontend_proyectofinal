import React from 'react'
import { Input } from '../components/ui/Input'
import { Buttom } from '../components/ui/Buttom'

export const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)  
        const formData = Object.fromEntries(data.entries())
        if(data.has("remember")){
            localStorage.setItem("user", JSON.stringify(formData))
            console.log(localStorage.getItem("user"))
            window.location.href = "/"
        }
    }
  return (
    <div className='bg-Hueso h-screen'>
        <div className='m-auto flex flex-col items-center justify-center h-full space-y-10 w-[80%]'>
            <h1 className='text-center text-[3em] font-extrabold'>SaveUp</h1>
            <form action="" onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-center space-y-11 w-full'>
                <div>
                    <label htmlFor="email">Correo electronico</label>
                    <Input placeholder="Correo electronico" type="email" name={"email"} />
                    <label htmlFor="password">Contraseña</label>
                    <Input type="password" placeholder="Contraseña" name={"password"} />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='space-x-2 flex items-center'>
                        <input type="checkbox" name="remember" id="remember" className='border-2 border-CerezaSuave checked:bg-CerezaSuave appearance-none h-5 w-5 rounded-md' />
                        <label htmlFor="remember" className='font-bold '>Recordarme</label>
                    </div>
                    <a href="" className='underline'>¿Olvidaste tu contraseña?</a>
                </div>
                <Buttom buttonName="Iniciar sesión" type="submit" />
            </form>
            <a className='underline'>Crear cuenta</a>
        </div>
    </div>
  )
}
