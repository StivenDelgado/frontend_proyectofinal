import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { HomeCard } from "../components/ui/HomeCard";
import quackCash from "../../assets/img/QuackCash.png"
import ahorro from "../../assets/img/Ahorro.png";
import metas from "../../assets/img/Metas.png";
export const Home = () => {

  return (
    <div className="bg-Hueso w-full h-screen flex flex-col">
      <div className=" h-screen flex-col items-center justify-center">
        <header className="bg-CerezaSuave px-12 w-full h-50  items-center flex">
          <FaRegCircleUser className="text-Hueso text-[2em] " />
          <h1 className="text-Hueso text-[2em] font-bold w-full text-center">
            SaveUp
          </h1>
          <FaRegBell className="text-Hueso text-[2em]" />
        </header>

        <div className="w-[75%] m-auto">    
          <HomeCard url={"/chatbot"} img={quackCash} tittle="QuackCash" description="¡Ahorra sin esfuerzo! Chatea con nuestro boty recibe planes de ahorro personalizados según tus hábitos. 📈💡"/>

          <HomeCard url={"/expenses"} img={ahorro} tittle="Control de Gastos" description="Registra, clasifica y mantén a raya tus gastos. Recibe alertas antes de pasarte del límite. ¡Toma el control! 💰🔥"/>

          <HomeCard url={"/goals"} img={metas} tittle="Mis Metas" description="Fija tus objetivos de ahorro y mira cómo crece tu dinero. ¡Organízate y alcanza tus sueños más rápido! 🚀💵"/>
        </div>
      </div>
      <footer className="w-full h-10 bg-CerezaSuave">

      </footer>
    </div>
  );
};
