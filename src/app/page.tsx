"use client";

import Image from "next/image";
import capa from "../assets/imagens/Capa.png";
import ImageSlider from "@/components/ImageSlider";
import { Socials } from "@/components/Socials";
import { Player } from "@/components/Player";

export default function Home() {
  return (
    <>
      <Image className="w-full" src={capa} alt="" />
      <Socials />
      <ImageSlider />

      <div className="p-3 bg-[#1B1C1C]">
        <Player url="https://www.youtube.com/embed/0nFten1JIwo?si=kX8oORLAyvI0l3Ks" />
      </div>
    </>
  );
}
