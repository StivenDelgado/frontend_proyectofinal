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
import { Select } from '../components/ui/Select';
import { Modal } from '../components/Modal';



export const Expenses = () => {

  const [addExpense, setAddExpense] = useState(false)
  const [filter, setFilter] = useState(false)
  const [addExpenseOptionAddition, setAddExpenseOptionAddition] = useState(false)
  const [addExpenseOptionSubtraction, setAddExpenseOptionSubtraction] = useState(false)
  const [addExpenseOptionChangeSalary, setAddExpenseOptionChangeSalary] = useState(false)
  const [addExpenseOptionDownloadSummary, setAddExpenseOptionDownloadSummary] = useState(false)
  const [expenses, setExpenses] = useState([
    { icon: "🐪", name: "Bono del trabajo", amount: "50.000", isExpense: false, category: "Trabajo" },
    { icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense: true, category: "Comida" },
    { icon: "🎁", name: "Regalo para mama", amount: "98.000", isExpense: true, category: "Otros" },
    { icon: "🚕", name: "Pago del uber", amount: "20.000", isExpense: true, category: "Transporte" },
    { icon: "💸", name: "Me encontre plata", amount: "55.000", isExpense: false, category: "Otros" },
    { icon: "📲", name: "Pago plan de datos", amount: "19.500", isExpense: true, category: "Gasto obligatorio" },
    { icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense: true, category: "Comida" },
    { icon: "💸", name: "Me encontre plata", amount: "55.000", isExpense: false, category: "Otros" },
    { icon: "🐷", name: "Ahorro mes enero", amount: "500.000", isExpense: false, category: "Ahorro" },
    { icon: "🍔", name: "Salida a comer", amount: "29.000", isExpense: true, category: "Comida" },
  ])

  const submitAddExpenseForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    form.reset()
  }

  const submitIncomeForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    form.reset()
  }

  const submitChangeSalaryForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    form.reset()
  }

  const submitfilter = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const formData = Object.fromEntries(data.entries())
    setExpenses(expenses.filter((expense) => expense.category === formData.categoria))
    form.reset()
  }

  return (
    < >
      <div className='bg-Hueso w-full h-screen flex-col items-center justify-center z-20'>
        <header className='bg-Cereza px-20 py-5'>
          <h2 className='text-Hueso text-center font-bold text-[3em]'>Saldo</h2>
          <h3 className='text-Hueso text-center font-bold text-[2em]'>$ 1.205.000</h3>
        </header>
        <main className='flex flex-col items-center  px-10 h-150 overflow-scroll hide-scrollbar'>
          {
            expenses.map((expense, index) => (
              <div className='w-full ' key={index}>
                <CardExpenses amount={expense.amount} icon={expense.icon} name={expense.name} isExpense={expense.isExpense} />
              </div>
            ))
          }
        </main>
        <div className=' w-full flex justify-end items-center px-10 py-5 gap-x-5'>
          <FaFilter className='text-4xl text-Cereza' onClick={() => { setFilter(!filter) }} />
          <IoIosAddCircleOutline className='text-5xl text-Cereza z-30' onClick={() => { setAddExpense(!addExpense) }} />
        </div>

        {/* MODAL DE OPCIONES DE GASTOS */}
        <div className={clsx([
          addExpense ? "h-[100vh] w-full" : "h-0 w-0",
          "fixed bottom-0 right-0 bg-transparent transition-all z-10 duration-400 flex flex-col rounded-t-2xl"])}
          onClick={() => setAddExpense(false)}
        >
          <div
            className={clsx([
              addExpense ? "h-[45vh] w-full" : "h-0 w-0",
              "fixed bottom-0 right-0 bg-white/80 transition-all z-10 duration-400 flex flex-col rounded-t-2xl"
            ])}
          >
            <div className='flex flex-col items-end pt-10 pr-11 gap-6 '>
              <ExpenseOption optionFunc={() => { setAddExpenseOptionAddition(!addExpenseOptionAddition); setAddExpense(!addExpense) }} optionText="Agregar gasto" icon={<GiPayMoney className='text-Granito text-4xl' />} />
              <ExpenseOption optionFunc={() => { setAddExpenseOptionSubtraction(!addExpenseOptionSubtraction); setAddExpense(!addExpense) }} optionText="Agregar ingreso" icon={<FaMoneyBillTrendUp className='text-Granito text-4xl' />} />
              <ExpenseOption optionFunc={() => { setAddExpenseOptionChangeSalary(!addExpenseOptionChangeSalary); setAddExpense(!addExpense) }} optionText="Cambiar sueldo" icon={<FaMoneyBillTransfer className='text-Granito text-4xl' />} />
              <ExpenseOption optionFunc={() => { setAddExpenseOptionDownloadSummary(!addExpenseOptionDownloadSummary); setAddExpense(!addExpense) }} optionText="Descargar resumen" icon={<MdFileDownload className='text-Granito text-4xl' />} />
            </div>

          </div>
        </div>

        {/* MODAL DE AGREGAR GASTO */}

        <Modal tittle={"Ingresa tu gasto"} widthHeight={"h-[60vh] w-95"} showModal={addExpenseOptionAddition} eventClick={(show) => setAddExpenseOptionAddition(show)}>
          <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e) => submitIncomeForm(e)}>
            <label htmlFor="" className='font-bold pl-2  text-Granito'>Nombre de tu ingreso</label>
            <Input name="nombreGasto" type="text" placeholder="Nombre de tu ingreso aqui" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>¿Que cantidad quieres ingresar?</label>
            <Input name="cantidadGasto" type="number" placeholder="Cantidad de tu ingreso" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>Ponle un icono a tu ingreso 🤑</label>
            <Input name="iconoGasto" type="text" placeholder="Ejemplo: 🍽 🍔 📲 🚕 🍕" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>Categoriza tu ingreso</label>

            <Select tittle="Elige opcion" options={["Oseo", "Entretenimiento", "Ahorro", "Comida", "Transporte", "Gasto obligatorio", "Salud", "Trabajo", "Otros"]} />

            <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito" />
          </form>
        </Modal>

        {/* MODAL DE INGREGAR INGRESO */}

        <Modal tittle={"Ingresa tu ingreso"} widthHeight={"h-[60vh] w-95"} showModal={addExpenseOptionSubtraction} eventClick={(show) => setAddExpenseOptionSubtraction(show)}>
          <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e) => submitIncomeForm(e)}>
            <label htmlFor="" className='font-bold pl-2  text-Granito'>Nombre de tu ingreso</label>
            <Input name="nombreGasto" type="text" placeholder="Nombre de tu ingreso aqui" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>¿Que cantidad quieres ingresar?</label>
            <Input name="cantidadGasto" type="number" placeholder="Cantidad de tu ingreso" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>Ponle un icono a tu ingreso 🤑</label>
            <Input name="iconoGasto" type="text" placeholder="Ejemplo: 🍽 🍔 📲 🚕 🍕" />

            <label htmlFor="" className='font-bold pl-2  text-Granito'>Categoriza tu ingreso</label>

            <Select tittle="Elige opcion" options={["Oseo", "Entretenimiento", "Ahorro", "Comida", "Transporte", "Gasto obligatorio", "Salud", "Trabajo", "Otros"]} />

            <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito" />
          </form>
        </Modal>
        {/* MODAL DE CAMBIAR SUELDO */}

        <Modal tittle={"Cambiemos tu sueldo"} widthHeight={"h-[40vh] w-95"} showModal={addExpenseOptionChangeSalary} eventClick={(show) => setAddExpenseOptionChangeSalary(show)}>
          <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e) => submitChangeSalaryForm(e)}>
            <label htmlFor="" className='font-bold pl-2  text-Granito'>¿Cual es tu nuevo sueldo?</label>
            <Input name="nuevoSueldo" type="number" placeholder="Tu nuevo sueldo" />

            <Buttom buttonName="Crear gasto" type="submit" style="mt-10 text-Granito" />
          </form>
        </Modal>
        {/* MODAL DE FILTRAR GASTOS */}

        <Modal tittle={"Filtrar"} widthHeight={"h-[30vh] w-95"} showModal={filter} eventClick={(show) => setFilter(show)}>
          <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e) => submitfilter(e)}>

            <Select defaultValue="¿Que deseas filtrar?" options={["Oseo", "Entretenimiento", "Ahorro", "Comida", "Transporte", "Gasto obligatorio", "Salud", "Trabajo", "Otros"]} />

            <Buttom buttonName="Filtrar" type="submit" style="mt-10 text-Granito" />
          </form>
        </Modal>
        <NavigationBar indexMenu={2} />
      </div>
    </>
  )
}