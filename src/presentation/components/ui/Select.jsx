import React from "react";

export const Select = ({tittle,options}) => {
  return (
    <select className="" name="categoria" id="">
      <option disabled selected value="">
        {tittle}
      </option>
      {
       options.map((element) =>(
        <option  value={element}>{element}</option>
       ))
      }
    </select>
  );
};
