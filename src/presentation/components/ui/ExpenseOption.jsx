import React from "react";

export const ExpenseOption = ({optionText, icon, optionFunc}) => {
  return (
    <div onClick={optionFunc} className="flex gap-x-2">
      <h3 className="text-Granito text-2xl">{optionText}</h3>
      {icon}
    </div>
  );
};
