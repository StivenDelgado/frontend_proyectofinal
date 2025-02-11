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
                    <ExpenseOption optionText="Agregar gasto" icon={<GiPayMoney className='text-Granito text-4xl'onClick={() => {setAddExpenseOptionAddition(!addExpenseOptionAddition)}}/>} />
                    <ExpenseOption optionText="Agregar ingreso" icon={<FaMoneyBillTrendUp className='text-Granito text-4xl'onClick={() => {setAddExpenseOptionSubtraction(!addExpenseOptionSubtraction)}}/>}/>
                    <ExpenseOption optionText="Cambiar sueldo" icon={<FaMoneyBillTransfer className='text-Granito text-4xl'onClick={() => {setAddExpenseOptionChangeSalary(!addExpenseOptionChangeSalary)}}/>}/>
                    <ExpenseOption optionText="Descargar resumen" icon={<MdFileDownload className='text-Granito text-4xl'onClick={() => {setAddExpenseOptionDownloadSummary(!addExpenseOptionDownloadSummary)}}/>}/>
                </div>
                    
            </div>

            <div className={clsx([
              addExpenseOptionAddition ? "h-[45vh] w-full" : "h-0 w-0",
              "fixed top-20 right-0 bg-Granito"
            ])}
            
            >

            </div>
            
            <NavigationBar indexMenu={2}/>
        </div>
                
    </>

  )
}