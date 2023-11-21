"use client";

import React, { useState } from "react";
import Menu from "../Menu";
import Image from "next/image";
import logo from "../../assets/imagens/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [aberto, setAberto] = useState<boolean>(false); // true or false boolean / aberto estado de criação, aberto vrdd visivel, aberto false invisible.

  return (
    <>
      <header className="fixed z-10 w-full h-[75px] bg-[#E8E7E7] flex justify-between items-center px-2 border border-opacity-10 border-b-[#000]">
        <Image src={logo} alt="laika" />
        {!aberto ? (
          <AiOutlineMenu
            onClick={() => {
              setAberto(true);
            }}
            size={29}
          />
        ) : (
          <AiOutlineClose
            onClick={() => {
              setAberto(false);
            }}
            size={29}
          />
        )}
      </header>
      {aberto ? (
        <Menu
          fecharMenu={() => {
            setAberto(false);
          }}
        />
      ) : null}
    </>
  );
};
