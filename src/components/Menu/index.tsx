"use client";

import Link from "next/link";
import React, { useState } from "react";
import dog from "../../assets/imagens/dog.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
interface MenuProps {
  fecharMenu: () => void;
  className?: string;
}
export const Menu = ({ fecharMenu, className }: MenuProps) => {
  const url = usePathname();

  const verifyUrl = (index: number) => {
    if (url === "/" && index === 0) return "underline";
    if (url === "/videos" && index === 1) return "underline";
  };

  return (
    <div
      className={`transition-all duration-300 ease-linear flex flex-col justify-center p-[42px] w-[100vw] h-[calc(100vh-75px)] fixed bg-[#E8E7E7] z-10 gap-[64px] ${className}`}
    >
      <Link
        onClick={fecharMenu}
        className={`${verifyUrl(0)} text-[24px]`}
        href={"/"}
      >
        HOME
      </Link>
      <Link
        onClick={fecharMenu}
        className={`${verifyUrl(1)} text-[24px]`}
        href={"/videos"}
      >
        VIDEOS
      </Link>
      {/* <Link onClick={fecharMenu} className="text-[24px]" href={""}>
        MERCH
      </Link>
      <Link onClick={fecharMenu} className="text-[24px]" href={"/tour"}>
        TOUR
      </Link> */}
      <Image className="absolute right-[42px]" src={dog} alt="dog" />
    </div>
  );
};
export default Menu;
