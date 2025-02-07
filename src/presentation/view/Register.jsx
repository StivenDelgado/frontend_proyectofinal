import React from 'react'
import { Input } from '../components/ui/Input'
import { Buttom } from '../components/ui/Buttom'

const Register = () => {

  const inputs = [
    {label: "Cedula / Tarjeta de identidad", componente: <Input name="cedula" type="text" placeholder="Tu número C.C / T.I aquí"/>},
    {label: "Nombres", componente: <Input name="nombres" type="text" placeholder="¿Cómo te llamas?"/>},
    {label: "Apellidos", componente: <Input name="apellidos" type="text" placeholder="¿Cómo te apellidas?"/>},
    {label: "Correo electrónico", componente: <Input name="correo" type="email" placeholder="Ingresa tu correo"/>},
    {label: "Contraseña", componente: <Input name="password" type="password" placeholder="Crea una contraseña segura"/>},
    {label: "Confirmar contraseña", componente: <Input name="confirmarPassword"  type="password" placeholder="Confirma tu contraseña"/>},
  ]

  const submitForm = (e) =>{
    e.preventDefault()
        const form = e.target
        const data = new FormData(form)  
        const formData = Object.fromEntries(data.entries())
        console.log(formData);
  }

  return (
    <div class='bg-Hueso w-full h-screen flex-col items-center justify-center'> 
        <div class='w-[80%] m-auto h-screen flex-col items-center justify-center'>
          <h1 class='text-[3em] text-center font-extrabold py-[2.5rem]'>SaveUp</h1>
          <p class='w-full text-center text-Granito'>!Que <span class='text-Cereza'>bacano</span> tenerte con nosotros¡ Juntos vamos a darle un orden a tus finanzas.</p>
          <form class='pt-[2rem]' onSubmit={(e)=>submitForm(e)}>
              {
                inputs.map((input, index)=>(
                  <div key={index}>
                      <label htmlFor="" class='font-bold pl-2  text-Granito'>{input.label}</label>
                      {input.componente}
                  </div>
                ))
              }
              <Buttom style="ml-[5.4rem] mt-[1rem] text-Hueso"  buttonName="¡Registrame!"></Buttom>
          </form>
          <p className='text-center text-Granito underline pt-[1rem]'>Iniciar sesión</p>
        </div>
    </div>
  )
}

export default Register
