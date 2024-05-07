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
import { MenuNavMobile } from "../MenuNavMobile"
import { SocialLinks } from "../SocialLinks"

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
          className="w-[170px] xl:w-[300px] z-50"
          priority
        />
        <div
          className={`z-50 lg:hidden mr-2 text-[#E8E7E7] transition-all duration-500 ease-in-out ${
            isOpen ? "rotate-[360deg]" : "rotate-0"
          }`}
          onClick={setIsOpen}
        >
          {!isOpen ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <MenuNavMobile
          isOpen={isOpen}
          scrollTo={scrollTo}
          setIsOpen={setIsOpen}
          activeMenuItem={activeMenuItem}
        />
        <MenuNav activeMenuItem={activeMenuItem} scrollTo={scrollTo} />
      </header>
      <aside>
        <SocialLinks />
      </aside>
    </>
  )
}
