"use client"

import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"
import { BsSpotify } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import React from "react"
import logo from "../../assets/imagens/logo-white.png"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <>
      <header className="fixed w-full flex justify-between items-center p-4 z-50">
        <Image src={logo} alt="logo laika" className="w-[300px]" />
        <nav className="flex gap-[32px] font-bold text-[#E8E7E7] text-lg pr-4">
          <div className="p-2">S.L.D.S.E.M.A.N</div>
          <div className="p-2">LETRAS</div>
          <div className="p-2">RELEASE</div>
          <Link href="#" className="p-2">
            VIDEOS
          </Link>
          <Link href="#" className="p-2">
            CONTATO
          </Link>
        </nav>
      </header>
      <div className="fixed flex flex-col gap-10 bottom-8 left-7 z-50">
        <div className="bg-[#575959] p-3 rounded-full">
          <AiOutlineInstagram size={24} className="text-[#E8E7E7]" />
        </div>
        <div className="bg-[#575959] p-3 rounded-full">
          <AiFillYoutube size={24} className="text-[#E8E7E7]" />
        </div>
        <div className="bg-[#575959] p-3 rounded-full">
          <BsSpotify size={24} className="text-[#E8E7E7]" />
        </div>
        <div className="bg-[#575959] p-3 rounded-full">
          <SiTidal size={24} className="text-[#E8E7E7]" />
        </div>
        <div className="bg-[#575959] p-3 rounded-full">
          <FaDeezer size={24} className="text-[#E8E7E7]" />
        </div>
      </div>
    </>
  )
}
