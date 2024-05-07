"use client"

import Link from "next/link"
import { useReducer } from "react"
import { AiFillPlusSquare, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai"
import { AiFillMinusSquare } from "react-icons/ai"
import { BsSpotify } from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"

export const SocialLinks = () => {
  const [active, setActive] = useReducer((active) => !active, false)
  return (
    <>
      <div className="hidden fixed xl:flex flex-col gap-4 bottom-4 left-4 z-20">
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
      <div
        className={`flex fixed xl:hidden flex-col gap-4 bottom-4 right-4 z-20 bg-[#8381BD] rounded-full`}
      >
        <div
          className={`transition-all duration-300 ease-in ${
            !active ? "rotate-[360deg]" : "rotate-0"
          }`}
          onClick={setActive}
        >
          {!active ? (
            <AiOutlinePlus className={`text-[30px] text-[#1B1C1C]`} />
          ) : (
            <AiOutlineMinus className={`text-[30px] text-[#1B1C1C]`} />
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in flex fixed xl:hidden w-[calc(100vw-64px)] flex-col gap-4 ${
          active ? "left-0" : "left-[-100%]"
        } bottom-3  z-20 bg-[#1B1C1C] rounded-lg rounded-s-none`}
      >
        <div className="flex justify-evenly">
          <Link
            target="_blank"
            href="https://www.instagram.com/laikanoespaco/"
            className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
          >
            <AiOutlineInstagram className="text-[20px]" />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@LaikaNoEspaco"
            className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
          >
            <AiFillYoutube className="text-[20px]" />
          </Link>
          <Link
            target="_blank"
            href="https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
            className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
          >
            <BsSpotify className="text-[20px]" />
          </Link>
          <Link
            target="_blank"
            href="https://tidal.com/browse/artist/35880721"
            className="transition-all ease-in-out duration-300 xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
          >
            <SiTidal className="text-[20px]" />
          </Link>
          <Link
            target="_blank"
            href="https://www.deezer.com/br/artist/191764857"
            className="transition-all ease-in-out duration-300  xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
          >
            <FaDeezer className="text-[20px]" />
          </Link>
        </div>
      </div>
    </>
  )
}
