import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import logo from "../../assets/imagens/logo.svg";
import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./animation.json";

export const Header = () => {
  return (
    <>
      <header className="w-full h-[75px] bg-[#E8E7E7] flex justify-between items-center px-2 ">
        <Image src={logo} alt="laika" />
        <AiOutlineMenu size={29} />
        <Lottie
          className="w-full h-[100px] flex  px-5 absolute top-5 left-0 "
          loop
          animationData={lottieJson}
          play
        />
      </header>
    </>
  );
};
