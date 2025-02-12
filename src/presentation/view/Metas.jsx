import { FaTrashCan } from "react-icons/fa6";

export default function MisMetas() {
  return (
    <div class="min-h-screen bg-Hueso flex flex-col items-center p-4">
      <header class="w-full bg-Cereza text-Hueso text-center py-6">
        <h1 class="text-4xl font-bold">Mis metas</h1>
        <p class="mt-2 px-4">
          Pon tu meta, elige cuánto y pa’ cuándo, y deja que la plata crezca sin enredos.
          Aquí te damos la mano pa’ que llegues sin afanes. ¡La vuelta es ahorrar y cumplir!
        </p>
      </header>

      <div class="bg-Hueso rounded-lg shadow-md p-4 mt-6 w-full max-w-md border border-Hueso">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-lg font-semibold">Viaje para final de año</h2>
          <button class="text-Granito hover:text-Cereza">
            <FaTrashCan size={20} />
          </button>
        </div>

        <button class="bg-Hueso text-Granito px-4 py-1 rounded-md text-sm hover:bg-Hueso">
          Abonar
        </button>

        <p class="mt-2 text-Granito font-medium">94.000 / 1.000.000</p>
      </div>
    </div>
  );
}
