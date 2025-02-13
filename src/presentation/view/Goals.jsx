import { FaTrashCan } from "react-icons/fa6";
import { GoalCard } from "../components/ui/GoalCard";

export default function Goals() {
  return (
    <div class=" bg-Hueso flex flex-col items-center w-full h-full">
      <header class="w-full bg-Cereza text-Hueso text-center py-6">
        <h1 class="text-4xl font-bold">Mis metas</h1>
        <p class="mt-2 px-4">
          Pon tu meta, elige cuánto y pa’ cuándo, y deja que la plata crezca sin
          enredos. Aquí te damos la mano pa’ que llegues sin afanes. ¡La vuelta
          es ahorrar y cumplir!
        </p>
      </header>
      <GoalCard tittle="Viaje para final de año" moneyMe={940000} moneyGoal={1000000} />
      <GoalCard tittle="Nuevo pc" moneyMe={500000} moneyGoal={1900000} />
      <GoalCard tittle="Regalos navidad" moneyMe={2500000} moneyGoal={3000000} />
    </div>
  );
}
