import React from 'react'
import { Input } from '../components/ui/Input'
import { Buttom } from '../components/ui/Buttom'

const Register = () => {

  const inputs = [
    {label: "Cedula / Tarjeta de identidad", componente: <Input type="text" placeholder="Tu número C.C / T.I aquí"/>},
    {label: "Nombres", componente: <Input type="text" placeholder="¿Cómo te llamas?"/>},
    {label: "Apellidos", componente: <Input type="text" placeholder="¿Cómo te apellidas?"/>},
    {label: "Correo electrónico", componente: <Input type="text" placeholder="Ingresa tu correo"/>},
    {label: "Contraseña", componente: <Input type="password" placeholder="Crea una contraseña segura"/>},
    {label: "Confirmar contraseña", componente: <Input type="password" placeholder="Confirma tu contraseña"/>},
  ]

  return (
    <div class='bg-Hueso w-full h-screen px-[3rem]'> 
        <h1 class='text-[3em] text-center font-extrabold py-[2.5rem]'>SaveUp</h1>
        <p class='w-full text-center text-Granito'>!Que <span class='text-Cereza'>bacano</span> tenerte con nosotros¡ Juntos vamos a darle un orden a tus finanzas.</p>

        <form class='pt-[2rem]' action="">
            {
              inputs.map((input)=>(
                <>
                  <label htmlFor="" class='font-bold pl-2  text-Granito'>{input.label}</label>
                  {input.componente}
                </>
              ))
            }
            <Buttom style="ml-[5.4rem] mt-[1rem] text-Hueso"  buttonName="¡Registrame!"></Buttom>
        </form>
        <p className='text-center text-Granito underline pt-[1rem]'>Iniciar sesión</p>
    </div>
  )
}

export default Register
