import React from "react";

export const Select = ({defaultValue,options}) => {
  return (
    <select className="" name="categoria"  >
      <option selected disabled>
        {defaultValue}
      </option>
      {
       options.map((element, index) =>(
        <option key={index} value={element}>{element}</option>
       ))
      }
    </select>
  );
};
