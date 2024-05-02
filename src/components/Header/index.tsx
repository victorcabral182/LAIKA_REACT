"use client"

import React, { useReducer } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/imagens/logo-white.png"
import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"
import { BsSpotify } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { MenuNav } from "../MenuNav"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"

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
  const [isOpen, setIsOpen] = useReducer((isOpen) => !isOpen, false)
  return (
    <>
      <header
        className={`transition-all duration-300 ease-in fixed w-full flex justify-between items-center px-2 py-2 xl:py-1 z-40 ${
          blurMenu ? "bg-transparent backdrop-blur-xl hover:bg-[#1B1C1C]" : ""
        } `}
      >
        <Image
          src={logo}
          alt="logo laika"
          className="w-[160px] xl:w-[300px] z-50"
          priority
        />
        <div
          className={`z-50 lg:hidden mr-2 text-[#E8E7E7] transition-all duration-500 ease-in-out ${
            isOpen ? "rotate-[360deg]" : "rotate-0"
          }`}
          onClick={setIsOpen}
        >
          {!isOpen ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
        {/* <nav
          className={`fixed z-30 left-0 top-0 flex flex-col items-center justify-center bg-[#1B1C1C] w-[100vw] h-[100vh] transition-all duration-150 ease-in-out ${
            !isOpen ? "top-[-200%]" : "top-0"
          }`}
        >
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
        </nav> */}
        <MenuNav activeMenuItem={activeMenuItem} scrollTo={scrollTo} />
      </header>
      <div className="fixed flex flex-col gap-4 bottom-4 left-4 z-20">
        <Link
          target="_blank"
          href="https://www.instagram.com/laikanoespaco/"
          className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <AiOutlineInstagram className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@LaikaNoEspaco"
          className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <AiFillYoutube className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
          className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <BsSpotify className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://tidal.com/browse/artist/35880721"
          className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <SiTidal className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.deezer.com/br/artist/191764857"
          className="transition-all ease-in-out duration-300 bg-transparent backdrop-blur-xl xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
        >
          <FaDeezer className="text-[24px]" />
        </Link>
      </div>
    </>
  )
}
