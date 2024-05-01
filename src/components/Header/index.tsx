"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/imagens/logo-white.png"
import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"
import { BsSpotify } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

interface IHeaderProps {
  blurMenu: boolean
  activeMenuItem: number | null
  scrollTo: (value: number) => void
}

export const Header = ({
  scrollTo,
  activeMenuItem,
  blurMenu,
}: IHeaderProps) => {
  return (
    <>
      <header
        className={`transition-all duration-300 ease-in fixed w-full flex justify-between items-center px-2 py-1 z-50 ${
          blurMenu ? "bg-transparent backdrop-blur-xl hover:bg-[#1B1C1C]" : ""
        } `}
      >
        <Image src={logo} alt="logo laika" className="w-[300px]" priority />
        <nav className={`flex gap-[32px] font-bold text-lg pr-4`}>
          <div
            onClick={() => scrollTo(1)}
            className={`${
              activeMenuItem === 1 ? "text-[#C6EFAB]" : "text-white"
            } p-2 cursor-pointer hover:text-[#3D71B7]`}
          >
            S.L.D.S.E.M.A.N
          </div>
          <div
            onClick={() => scrollTo(2)}
            className={`${
              activeMenuItem === 2 ? "text-[#C6EFAB]" : "text-white"
            } p-2 cursor-pointer hover:text-[#3D71B7]`}
          >
            VÍDEOS
          </div>
          <div
            onClick={() => scrollTo(3)}
            className={`${
              activeMenuItem === 3 ? "text-[#C6EFAB]" : "text-white"
            } p-2 cursor-pointer hover:text-[#3D71B7]`}
          >
            LETRAS
          </div>
          <div
            onClick={() => scrollTo(4)}
            className={`${
              activeMenuItem === 4 ? "text-[#C6EFAB]" : "text-white"
            } p-2 cursor-pointer hover:text-[#3D71B7]`}
          >
            CONTATO
          </div>
        </nav>
      </header>
      <div className="fixed flex flex-col gap-10 bottom-4 left-4 z-50">
        <Link
          target="_blank"
          href="https://www.instagram.com/laikanoespaco/"
          className="transition-all ease-in-out duration-300 bg-[#575959] p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <AiOutlineInstagram size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@LaikaNoEspaco"
          className="transition-all ease-in-out duration-300 bg-[#575959] p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <AiFillYoutube size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
          className="transition-all ease-in-out duration-300 bg-[#575959] p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <BsSpotify size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://tidal.com/browse/artist/35880721"
          className="transition-all ease-in-out duration-300 bg-[#575959] p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <SiTidal size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://www.deezer.com/br/artist/191764857"
          className="transition-all ease-in-out duration-300 bg-[#575959] p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <FaDeezer size={24} />
        </Link>
      </div>
    </>
  )
}
