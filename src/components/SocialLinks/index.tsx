import Link from "next/link"
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai"
import { BsSpotify } from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import { SiTidal } from "react-icons/si"

export const SocialLinks = () => {
  return (
    <>
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
