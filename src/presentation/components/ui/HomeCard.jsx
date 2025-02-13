import React from "react";
import { Link } from "react-router";

export const HomeCard = ({img, tittle, description, url}) => {
  
  return (
    <Link to={url} class="text-Granito flex pt-10">
      <div class="flex flex-col w-100">
        <img class="w-25 h-25" src={img}/>
        <p class="text-center">{tittle} </p>
      </div>
      <p class="flex flex-col text-center justify-center">
        {description}
      </p>
    </Link>
  );
};
