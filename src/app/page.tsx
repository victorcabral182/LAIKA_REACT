"use client"

import Image from "next/image"
import capaNevoeiro from "../assets/imagens/capa-nevoeiro.jpg"
import React, { useRef } from "react"
import { IParallax } from "@react-spring/parallax"
import { Header } from "@/components/Header"
import { FirstContent } from "@/components/FirstContent"
import { SecondContent } from "@/components/SecondContent"
import { ThirdContent } from "@/components/ThirdContent"
import { LyricsContent } from "@/components/LyricsContent"

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className="boxParallax bg1 flex flex-col justify-center items-center gap-6">
          <FirstContent />
        </div>
        <div className="text-[#E8E7E7] bg-[#3D71B7] text-justify py-20 px-[400px] flex flex-col gap-4">
          <SecondContent />
        </div>
        <div className="boxParallax bg2 flex flex-col justify-center items-center">
          <h3 className="text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7]">
            VÍDEOS
          </h3>
        </div>
        <div className="text-[#777] bg-[#C6EFAB] text-justify py-20 px-[400px] flex justify-between gap-8 items-center">
          <ThirdContent />
        </div>
        <div className="boxParallax bg3 flex flex-col justify-center items-center">
          <h3 className="text-[144px] mb-4 font-semibold uppercase text-[#E8E7E7]">
            LETRAS
          </h3>
        </div>
        <LyricsContent />
        <div className="boxParallax bg4" />
        <div className="w-full p-2 bg-[#E8E7E7]" />
        <div className="text-[#E8E7E7] bg-[#1B1C1C] text-center p-10 gap-4">
          <p>Todos os direitos reservados - 2024</p>
        </div>
      </div>
    </>
  )
}
