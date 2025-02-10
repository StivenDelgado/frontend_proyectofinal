import React from "react";

export const ExpenseOption = ({optionText, icon}) => {
  return (
    <div className="flex gap-x-2">
      <h3 className="text-Granito text-2xl">{optionText}</h3>
      {icon}
    </div>
  );
};
