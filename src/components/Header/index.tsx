"use client";

import React, { useState } from "react";
import Menu from "../Menu";
import Image from "next/image";
import logo from "../../assets/imagens/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [aberto, setAberto] = useState<boolean>(false);
  const url = usePathname();

  const verifyUrl = (index: number) => {
    if (url === "/" && index === 0) return "underline";
    if (url === "/videos" && index === 1) return "underline";
  };
  return (
    <>
      <header className="fixed z-20 w-full h-[75px] bg-[#E8E7E7] flex justify-between items-center px-2 border border-opacity-10 border-b-[#000] md:px-[10%]">
        <Image className="w-[61px] lg:w-[90px]" src={logo} alt="laika" />
        <div className="hidden lg:flex gap-[64px] mr-2">
          <Link className={`${verifyUrl(0)} text-[24px]`} href={"/"}>
            HOME
          </Link>
          <Link className={`${verifyUrl(1)} text-[24px]`} href={"/videos"}>
            VIDEOS
          </Link>
        </div>
        {!aberto ? (
          <AiOutlineMenu
            className="lg:hidden"
            onClick={() => {
              setAberto(true);
            }}
            size={29}
          />
        ) : (
          <AiOutlineClose
            className="lg:hidden"
            onClick={() => {
              setAberto(false);
            }}
            size={29}
          />
        )}
      </header>
      <Menu
        className={`${
          aberto ? "top-[75px] opacity-100" : "top-[-1000px] opacity-0"
        } lg:hidden`}
        fecharMenu={() => {
          setAberto(false);
        }}
      />
    </>
  );
};
