import React from "react";

export const HomeCard = ({img, tittle, description}) => {
  
  return (
    <div class="text-Granito flex pt-10">
      <div class="flex flex-col w-100">
        <img class="w-25 h-30 " src={img}/>
        <p class="text-center">{tittle} </p>
      </div>
      <p class="flex flex-col text-center justify-center">
        {description}
      </p>
    </div>
  );
};
