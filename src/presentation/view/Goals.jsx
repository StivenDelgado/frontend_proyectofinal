import { GoalCard } from "../components/ui/GoalCard";
import { GiPayMoney } from "react-icons/gi";
import { ExpenseOption } from "../components/ui/ExpenseOption";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import { NavigationBar } from "../components/NavigationBar";
import { FaFilter } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { Modal } from "../components/Modal";
import { Input } from "../components/ui/Input";

export default function Goals() {

    const [addGoal, setAddGoal] = useState(false)
    const [filter, setFilter] = useState(false)
    const [addGoalOption, setAddGoalOption] = useState(false)
    const [addExpenseOptionDownloadSummary, setAddExpenseOptionDownloadSummary] = useState(false)

    const submitAddGoal = (e) => {
      e.preventDefault()
      const form = e.target
      const data = new FormData(form)
      const formData = Object.fromEntries(data.entries())
      form.reset()
    }

  return (
    <div class=" bg-Hueso flex flex-col items-center w-full h-screen">
      <header class="w-full bg-Cereza text-Hueso text-center py-6">
        <h1 class="text-4xl font-bold">Mis metas</h1>
        <p class="mt-2 px-4">
          Pon tu meta, elige cuánto y pa’ cuándo, y deja que la plata crezca sin
          enredos. Aquí te damos la mano pa’ que llegues sin afanes. ¡La vuelta
          es ahorrar y cumplir!
        </p>
      </header>
      <main className='flex flex-col items-center  px-3 h-150 overflow-scroll hide-scrollbar'>
        <GoalCard tittle="Viaje para final de año" moneyMe={940000} moneyGoal={1000000} />
        <GoalCard tittle="Nuevo pc" moneyMe={500000} moneyGoal={1900000} />
        <GoalCard tittle="Regalos navidad" moneyMe={2500000} moneyGoal={3000000} />
      </main>

      <div className=' w-full flex justify-end items-center px-10 py-5 gap-x-5'>
        <FaFilter className='text-4xl text-Cereza' onClick={() => { setFilter(!filter) }} />
        <IoIosAddCircleOutline className='text-5xl text-Cereza z-30' onClick={() => { setAddGoal(!addGoal) }} />
      </div>
      <div className={clsx([
        addGoal ? "h-[100vh] w-full" : "h-0 w-0",
        "fixed bottom-0 right-0 bg-transparent transition-all z-10 duration-400 flex flex-col rounded-t-2xl"])}
        onClick={() => setAddGoal(false)}
      >
        <div
          className={clsx([
          addGoal ? "h-[32vh] w-full" : "h-0 w-0",
          "fixed bottom-0 right-0 bg-white/80 transition-all z-10 duration-400 flex flex-col rounded-t-2xl"
          ])}>
            <div className='flex flex-col items-end pt-10 pr-11 gap-6 '>
              <ExpenseOption optionFunc={() => { setAddGoalOption(!addGoalOption); setAddExpense(!addGoal) }} optionText="Agregar meta" icon={<FaPiggyBank  className='text-Granito text-4xl' />} />
              <ExpenseOption optionFunc={() => { setAddExpenseOptionDownloadSummary(!addExpenseOptionDownloadSummary); setAddExpense(!addExpense) }} optionText="Descargar resumen de metas" icon={<MdFileDownload className='text-Granito text-4xl' />} />
            </div>
        </div>
      </div>
      <Modal tittle={"Crear meta"} widthHeight={"h-[30vh] w-95"} showModal={addGoalOption} eventClick={(show) => setAddGoalOption(show)}>
        <form className='pt-5 flex flex-col content-center items-center' onSubmit={(e) => submitAddGoal(e)}>
          <label className="font-bold pl-2 text-Granito" htmlFor="">¿Que nombre le quieres dar a tu meta?</label>
          <Input name="nombreMeta" type="text" placeholder="Nombre de tu meta"/>
        </form>

      </Modal>
      <NavigationBar indexMenu={3} />
              
    </div>
  );
}
