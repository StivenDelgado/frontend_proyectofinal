import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { HomeCard } from "../components/ui/HomeCard";
import quackCash from "../../assets/img/QuackCash.png"
import ahorro from "../../assets/img/Ahorro.png";
import metas from "../../assets/img/Metas.png";
import { Link } from "react-router";
export const Home = () => {

  return (
    <div class="bg-Hueso w-full h-screen flex flex-col">
      <div class="m-autow-full h-screen flex-col items-center justify-center">
        <header class="bg-Cereza px-12 w-full h-50  items-center flex">
          <FaRegCircleUser class="text-Hueso text-[2em] " />
          <h1 class="text-Hueso text-[2em] font-bold w-full text-center">
            SaveUp
          </h1>
          <FaRegBell class="text-Hueso text-[2em]" />
        </header>

        <div class=" px-15"> 

          <Link to={"/chatbot"}>
          <HomeCard img={quackCash} tittle="QuackCash" description="¡Ahorra sin esfuerzo! Chatea con nuestro boty recibe planes de ahorro personalizados según tus hábitos. 📈💡"/>
          </Link>

          <Link to={"/expenses"}>
          <HomeCard img={ahorro} tittle="Control de Gastos" description="Registra, clasifica y mantén a raya tus gastos. Recibe alertas antes de pasarte del límite. ¡Toma el control! 💰🔥"/>
          </Link>

          <Link to={"/goals"}>
          <HomeCard img={metas} tittle="Mis Metas" description="Fija tus objetivos de ahorro y mira cómo crece tu dinero. ¡Organízate y alcanza tus sueños más rápido! 🚀💵"/>
          </Link>

        </div>
      </div>
      <footer class="w-full h-10 bg-Cereza">

      </footer>
    </div>
  );
};
