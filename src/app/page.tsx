"use client";
import { Header } from "@/components/Header";
import Image from "next/image";
import capa from "../assets/imagens/Capa.png";
import { Sociais } from "@/components/Sociais";
import Corpo from "@/components/Corpo";
import { Play } from "@/components/Play";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Header />
      <Image className="w-full" src={capa} alt="" />
      <Sociais />
      <Corpo />
      <div className="p-3 bg-[#1B1C1C]">
        <Play />
      </div>
      <Rodape/>
    </>
  );
}
