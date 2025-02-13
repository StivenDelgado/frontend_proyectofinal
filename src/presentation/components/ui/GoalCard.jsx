import React from "react";
import { FaTrashCan } from "react-icons/fa6";

export const GoalCard = ({ tittle, moneyMe, moneyGoal}) => {
  return (
    <div class="bg-Hueso rounded-lg shadow-md mx-5 w-90 mt-4 flex flex-col border-Hueso p-4">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-lg font-semibold">{tittle} </h2>
        <button class="text-Granito hover:text-Cereza">
          <FaTrashCan size={20} />
        </button>
      </div>

      <div class="flex justify-between">
        <button class="bg-Hueso border-2  text-Granito px-4 py-1 rounded-md text-sm hover:bg-Hueso">
          Abonar
        </button>
        <div className="flex gap-3">
          <p class="mt-2 text-Granito font-medium">{moneyMe} </p>
          <p class="mt-2 text-Granito font-medium">/</p>
          <p class="mt-2 text-Granito font-medium">{moneyGoal} </p>
        </div>
      </div>

      <div class="border-t-1 mt-1">
        <div class="bg-VerdeMenta mt-1 h-5 rounded-full">
          <p class="text-center text-Hueso font-bold">{Math.floor(moneyMe * 100 / moneyGoal)} % </p>
        </div>
      </div>
    </div>
  );
};
