"use client";

import Image from "next/image";
import capa from "../assets/imagens/Capa.png";
import outerSpace from "../assets/imagens/outerspace.gif";
import ImageSlider from "@/components/ImageSlider";
import { Socials } from "@/components/Socials";
import { Player } from "@/components/Player";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image className="w-full z-10 md:px-[10%] " src={capa} alt="" />
        <Image
          className="w-full -z-10 absolute top-0 opacity-20"
          src={outerSpace}
          alt="gif"
        />
      </div>
      <Socials />
      <div className="w-full md:px-[10%] bg-[#1B1C1C]">
        <ImageSlider />
      </div>
      <div className="p-3 md:px-[10%] bg-[#1B1C1C]">
        <Player url="https://www.youtube.com/embed/0nFten1JIwo?si=kX8oORLAyvI0l3Ks" />
      </div>
    </>
  );
}
