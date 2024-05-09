"use client"

import Link from "next/link"
import { useReducer } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai"
import { BsSpotify } from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"

export const SocialLinks = () => {
  const [active, setActive] = useReducer((active) => !active, false)
  return (
    <>
      <div className="hidden fixed lg:flex flex-col gap-4 bottom-4 left-4 z-20">
        <Link
          target="_blank"
          href="https://www.instagram.com/laikanoespaco/"
          className="transition-all ease-in-out duration-300 lg:bg-[#1B1C1C] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD]"
        >
          <AiOutlineInstagram className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@LaikaNoEspaco"
          className="transition-all ease-in-out duration-300 lg:bg-[#1B1C1C] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <AiFillYoutube className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
          className="transition-all ease-in-out duration-300 lg:bg-[#1B1C1C] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <BsSpotify className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://tidal.com/browse/artist/35880721"
          className="transition-all ease-in-out duration-300 lg:bg-[#1B1C1C] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] bg-transparent backdrop-blur-xl"
        >
          <SiTidal className="text-[24px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.deezer.com/br/artist/191764857"
          className="transition-all ease-in-out duration-300 bg-transparent backdrop-blur-xl lg:bg-[#1B1C1C] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] "
        >
          <FaDeezer className="text-[24px]" />
        </Link>
      </div>
      <div
        style={{ border: "1px solid #E8E7E7" }}
        className={`flex fixed lg:hidden flex-col gap-4 bottom-4 left-4 z-20 p-1 bg-[#1B1C1C] rounded-full`}
      >
        <div
          className={`transition-all duration-300 ease-in ${
            !active ? "rotate-[360deg]" : "rotate-0"
          }`}
          onClick={setActive}
        >
          {!active ? (
            <AiOutlinePlus className={`text-[28px] text-[#E8E7E7]`} />
          ) : (
            <AiOutlineMinus className={`text-[28px] text-[#E8E7E7]`} />
          )}
        </div>
      </div>
      <div
        style={{ border: "1px solid #E8E7E7" }}
        className={`transition-all duration-200 ease-in flex fixed lg:hidden left-4 w-[38px] flex-col gap-4 ${
          active ? "h-[370px]" : "h-[36px]"
        } bottom-4 z-[19] bg-[#1B1C1C] rounded-full`}
      >
        <Link
          target="_blank"
          href="https://www.instagram.com/laikanoespaco/"
          className={`transition-all ${
            active
              ? "ease-in duration-700 opacity-100"
              : "ease-in duration-75 opacity-0"
          } xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] my-2`}
        >
          <AiOutlineInstagram className="text-[20px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@LaikaNoEspaco"
          className={`transition-all  ${
            active
              ? "ease-in duration-700 opacity-100"
              : "ease-in duration-75 opacity-0"
          } xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] my-2`}
        >
          <AiFillYoutube className="text-[20px]" />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/intl-pt/artist/1V81UUTh3efUS7WWoyvuB9"
          className={`transition-all ${
            active
              ? "ease-in duration-700 opacity-100"
              : "ease-in duration-75 opacity-0"
          } xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] my-2`}
        >
          <BsSpotify className="text-[20px]" />
        </Link>
        <Link
          target="_blank"
          href="https://tidal.com/browse/artist/35880721"
          className={`transition-all ${
            active
              ? "ease-in duration-700 opacity-100"
              : "ease-in duration-75 opacity-0"
          } xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] my-2`}
        >
          <SiTidal className="text-[20px]" />
        </Link>
        <Link
          target="_blank"
          href="https://www.deezer.com/br/artist/191764857"
          className={`transition-all ${
            active
              ? "ease-in duration-700 opacity-100"
              : "ease-in duration-75 opacity-0"
          } xl:bg-[#575959] p-2 xl:p-3 rounded-full hover:text-[#1B1C1C] text-[#E8E7E7] hover:bg-[#8381BD] my-2`}
        >
          <FaDeezer className="text-[20px]" />
        </Link>
      </div>
    </>
  )
}
