import React from "react";

export const CardExpenses = ({icon, name, isExpense, amount}) => {
  return (
    <div 
    className={`flex justify-between px-2 w-full h-12 rounded-2xl my-3 items-center ${isExpense ? "bg-CerezaSuave" : "bg-VerdeMenta"}`}>
      <div className="text-2xl">{icon}</div>
      <div className="text-Hueso font-bold text-[1.2em]">{name}</div>
      <p className="text-Hueso font-bold">{isExpense ? "-" : "+"}{amount}</p>
    </div>
  );
};
