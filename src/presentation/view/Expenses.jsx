import React, { useState } from 'react'
import { CardExpenses } from '../components/ui/CardExpenses'
import { Buttom } from '../components/ui/Buttom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { clsx } from 'clsx';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { MdFileDownload } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { ExpenseOption } from '../components/ui/ExpenseOption';
import { NavigationBar } from '../components/NavigationBar';
import { Input } from '../components/ui/Input';
import { IoMdClose } from "react-icons/io";
import { Select } from '../components/ui/Select';



export const Expenses = () => {

    const [addExpense, setAddExpense] = useState(false)
    const [addExpenseOptionAddition, setAddExpenseOptionAddition] = useState(false)
    const [addExpenseOptionSubtraction, setAddExpenseOptionSubtraction] = useState(false)
    const [addExpenseOptionChangeSalary, setAddExpenseOptionChangeSalary] = useState(false)
    const [addExpenseOptionDownloadSummary, setAddExpenseOptionDownloadSummary] = useState(false)

    const expenses =[
        {icon: "🐪", name: "Bono del trabajo", amount: "50.000", isExpense:false},
        {icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense:true},
        {icon: "🎁", name: "Regalo para mama", amount: "98.000", isExpense:true},
        {icon: "🚕", name: "Pago del uber", amount: "20.000", isExpense:true},
        {icon: "💸", name: "Me encontre plata", amount: "55.000", isExpense:false},
        {icon: "📲", name: "Pago plan de datos", amount: "19.500", isExpense:true},
        {icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense:true},
        {icon: "💸", name: "Me encontre plata", amount: "55.000", isExpense:false},
        {icon: "🐷", name: "Ahorro mes enero", amount: "500.000", isExpense:false},
        {icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense:true},
    ] 

    const submitAddExpenseForm = (e) =>{
      e.preventDefault()
      const form = e.target
      const data = new FormData(form)
      const formData = Object.fromEntries(data.entries())
      console.log(formData);
    }

    const submitIncomeForm = (e) =>{
      e.preventDefault()
      const form = e.target
      const data = new FormData(form)
      const formData = Object.fromEntries(data.entries())
      console.log(formData);
    }

    const submitChangeSalaryForm = (e) =>{
      e.preventDefault()
      const form = e.target
      const data = new FormData(form)
      const formData = Object.fromEntries(data.entries())
      console.log(formData);
    }

  return (
    < >
      <div class='bg-Hueso w-full h-screen flex-col items-center justify-center z-20'>
          <header className='bg-Cereza px-20 py-5'>
            <h2 className='text-Hueso text-center font-bold text-[3em]'>Saldo</h2>
            <h3 className='text-Hueso text-center font-bold text-[2em]'>$ 1.205.000</h3>
          </header>
          <main className='flex flex-col items-center  px-10 h-150 overflow-scroll hide-scrollbar'>
            {
                expenses.map((expense, index) =>(
                    <div className='w-full ' key={index}>
                        <CardExpenses amount={expense.amount} icon={expense.icon} name={expense.name} isExpense={expense.isExpense}/>
                    </div>
                ))
            }
          </main>
            <div className=' w-full flex justify-end items-center px-10 py-5 gap-x-5'>
                <FaFilter className='text-4xl text-Cereza' />
                <IoIosAddCircleOutline  className='text-5xl text-Cereza z-30' onClick={() =>{setAddExpense(!addExpense)}}/>
                {
                // addExpense &&
                // <div className='py-8 absolute bottom-full right-0 space-y-8 bg'>
                //     <button>hola</button>
                // </div>
                }
            </div>
            <div
                className={clsx([
                addExpense ? "h-[45vh] w-full" : "h-0 w-0",
                "fixed bottom-0 right-0 bg-white/80 transition-all z-10 duration-400 flex flex-col rounded-t-2xl"
                ])}
                >

                <div className='flex flex-col items-end pt-10 pr-11 gap-6 '>
                    <ExpenseOption optionFunc={() => {setAddExpenseOptionAddition(!addExpenseOptionAddition);setAddExpense(!addExpense)}} optionText="Agregar gasto" icon={<GiPayMoney className='text-Granito text-4xl'/>} />
                    <ExpenseOption optionFunc={() => {setAddExpenseOptionSubtraction(!addExpenseOptionSubtraction);setAddExpense(!addExpense)}} optionText="Agregar ingreso" icon={<FaMoneyBillTrendUp className='text-Granito text-4xl'/>}/>
                    <ExpenseOption optionFunc={() => {setAddExpenseOptionChangeSalary(!addExpenseOptionChangeSalary);setAddExpense(!addExpense)}} optionText="Cambiar sueldo" icon={<FaMoneyBillTransfer className='text-Granito text-4xl'/>}/>
                    <ExpenseOption optionFunc={() => {setAddExpenseOptionDownloadSummary(!addExpenseOptionDownloadSummary);setAddExpense(!addExpense)}} optionText="Descargar resumen" icon={<MdFileDownload className='text-Granito text-4xl'/>}/>
                </div>
                    
            </div>

            {/* MODAL DE AGREGAR GASTO */}
            <div className={clsx([
              addExpenseOptionAddition ? "h-[60vh] w-95" : "h-0 w-0 border-none",
              "fixed top-45 right-0 bg-Hueso/90 transition-all rounded-2xl mx-6 border-1 border-black duration-400 "
            ])}
            >

              <div className={clsx([
                addExpenseOptionAddition ? "w-full h-full flex flex-col content-center items-center" : "hidden"
              ])}>
                <IoMdClose  className='text-5xl fixed right-10 pt-5' onClick={() => setAddExpenseOptionAddition(!addExpenseOptionAddition)}/>
                <header>
                  <h2 className='text-Granito text-[2em] pt-10 font-bold'>
                    Ingresa tu gasto
                  </h2>
                </header>
                  <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e)=>submitAddExpenseForm(e)}>
                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Nombre de tu gasto</label>
                    <Input  name="nombreGasto" type="text" placeholder="Nombre de tu gasto aqui"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>¿Que cantidad gastaste?</label>
                    <Input  name="cantidadGasto" type="number" placeholder="Cantidad de tu gasto"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Ponle un icono a tu gasto 😃</label>
                    <Input  name="iconoGasto" type="text" placeholder="Ejemplo: 🍽 🍔 📲 🚕 🍕"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Categoriza tu gasto</label>
                    
                    <Select tittle="Elige opcion" options={["Oseo", "Entretenimiento", "Comida", "Transporte", "Gasto obligatorio", "Salud"]}/>

                    <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito"/>
                  </form>
                
              </div>

            </div>

            {/* MODAL DE INGREGAR INGRESO */}
            <div className={clsx([
              addExpenseOptionSubtraction ? "h-[60vh] w-95" : "h-0 w-0 border-none",
              "fixed top-45 right-0 bg-Hueso/90 transition-all rounded-2xl mx-6 border-1 border-black duration-400 "
            ])}
            >

              <div className={clsx([
                addExpenseOptionSubtraction ? "w-full h-full flex flex-col content-center items-center" : "hidden"
              ])}>
                <IoMdClose  className='text-5xl fixed right-10 pt-5' onClick={() => setAddExpenseOptionSubtraction(!addExpenseOptionSubtraction)}/>
                <header>
                  <h2 className='text-Granito text-[2em] pt-10 font-bold'>
                    Ingresa tu ingreso
                  </h2>
                </header>
                  <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e)=>submitIncomeForm(e)}>
                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Nombre de tu ingreso</label>
                    <Input  name="nombreGasto" type="text" placeholder="Nombre de tu ingreso aqui"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>¿Que cantidad quieres ingresar?</label>
                    <Input  name="cantidadGasto" type="number" placeholder="Cantidad de tu ingreso"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Ponle un icono a tu ingreso 🤑</label>
                    <Input  name="iconoGasto" type="text" placeholder="Ejemplo: 🍽 🍔 📲 🚕 🍕"/>

                    <label htmlFor="" class='font-bold pl-2  text-Granito'>Categoriza tu ingreso</label>
                    
                    <Select tittle="Elige opcion" options={["Oseo", "Entretenimiento", "Comida", "Transporte", "Gasto oblogatorio", "Salud"]}/>

                    <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito"/>
                  </form>
                
              </div>

            </div>

              {/* MODAL DE CAMBIAR SUELDO */}
            <div className={clsx([
              addExpenseOptionChangeSalary ? "h-[40vh] w-95" : "h-0 w-0 border-none",
              "fixed top-60 right-0 bg-Hueso/90 transition-all rounded-2xl mx-6 border-1 border-black duration-400 "
            ])}
            >

              <div className={clsx([
                addExpenseOptionChangeSalary ? "w-full h-full flex flex-col content-center items-center" : "hidden"
              ])}>
                <IoMdClose  className='text-5xl fixed right-10 pt-5' onClick={() => setAddExpenseOptionChangeSalary(!addExpenseOptionChangeSalary)}/>
                <header>
                  <h2 className='text-Granito text-[2em] pt-10 font-bold'>
                    Cambiemos tu sueldo
                  </h2>
                </header>
                  <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e)=>submitChangeSalaryForm(e)}>
                    <label htmlFor="" class='font-bold pl-2  text-Granito'>¿Cual es tu nuevo sueldo?</label>
                    <Input  name="nuevoSueldo" type="number" placeholder="Tu nuevo sueldo"/>

                    <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito"/>
                  </form>
                
              </div>

            </div>
            
            <NavigationBar indexMenu={2}/>
        </div>
                
    </>

  )
}