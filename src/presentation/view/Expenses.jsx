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



export const Expenses = () => {

    const [addExpense, setAddExpense] = useState(false)

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

  return (
    < >
      <div class='bg-Hueso w-full h-screen flex-col items-center justify-center z-50'>
          <header className='bg-Cereza px-20 py-5'>
            <h2 className='text-Hueso text-center font-bold text-[3em]'>Saldo</h2>
            <h3 className='text-Hueso text-center font-bold text-[2em]'>$ 1.205.000</h3>
          </header>
          <main className='flex flex-col items-center  px-10 h-150 overflow-scroll'>
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
                <IoIosAddCircleOutline  className='text-5xl text-Cereza z-60' onClick={() =>{setAddExpense(!addExpense)}}/>
                {
                // addExpense &&
                // <div className='py-8 absolute bottom-full right-0 space-y-8 bg'>
                //     <button>hola</button>
                // </div>
                }
            </div>
            <div
                className={clsx([
                addExpense ? "h-screen w-full" : "h-0 w-0",
                "fixed bottom-0 right-0 bg-white/90 transition-all z-40 duration-300 flex flex-col"
                ])}
                >

                <div className='flex flex-col items-end pt-125 pr-10 gap-6 '>
            
                    <ExpenseOption optionText="Ingresar gasto" icon={<GiPayMoney className='text-Granito text-5xl'/>} />
                    <ExpenseOption optionText="Agregar ingreso" icon={<FaMoneyBillTrendUp className='text-Granito text-5xl'/>}/>
                    <ExpenseOption optionText="Cambiar sueldo" icon={<FaMoneyBillTransfer className='text-Granito text-5xl'/>}/>
                    <ExpenseOption optionText="Descargar resumen" icon={<MdFileDownload className='text-Granito text-5xl'/>}/>

                </div>
                    
            </div>
            
        </div>
                
    </>

  )
}