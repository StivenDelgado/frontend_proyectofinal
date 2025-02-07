import React from "react";
import { useState } from "react";
export const Buttom = ({ buttonName, type, style}) => {
  return (
    <button
      className={`bg-Cereza py-[1rem] px-[2rem] rounded-full font-bold ${style}`}
      type={type}
    >
      <p>{buttonName}</p>
    </button>
  );
};
