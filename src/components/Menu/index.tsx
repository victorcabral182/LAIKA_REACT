import Link from "next/link";
import React, { useState } from "react";
import dog from "../../assets/imagens/dog.png";
import Image from "next/image";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-center p-[42px] w-[100vw] h-[calc(100vh-75px)] fixed top-[75px] bg-[#E8E7E7]  z-10 gap-[64px] ">
      <Link className="text-[24px]" href={""}>
        HOME
      </Link>
      <Link className="text-[24px]" href={""}>
        VIDEOS
      </Link>
      <Link className="text-[24px]" href={""}>
        MERCH
      </Link>
      <Link className="text-[24px]" href={""}>
        TOUR
      </Link>
      <Image className="absolute right-[42px]" src={dog} alt="dog" />
    </div>
  );
};
export default Menu;